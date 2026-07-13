type AuditPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  businessType?: unknown;
  packageInterest?: unknown;
  message?: unknown;
  company?: unknown;
};

function clean(value: unknown, maxLength = 600) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalizeWebsite(value: string) {
  if (!value) return "";
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    return new URL(withProtocol).toString();
  } catch {
    return "";
  }
}

function buildTelegramMessage(data: {
  name: string;
  email: string;
  phone: string;
  website: string;
  businessType: string;
  packageInterest: string;
  message: string;
  pageUrl: string;
}) {
  const lines = [
    "<b>New free website audit request</b>",
    "",
    `<b>Name:</b> ${escapeHtml(data.name)}`,
    `<b>Email:</b> ${escapeHtml(data.email)}`,
    `<b>Phone:</b> ${escapeHtml(data.phone)}`,
    `<b>Website:</b> ${escapeHtml(data.website)}`,
    `<b>Business type:</b> ${escapeHtml(data.businessType || "Not specified")}`,
    `<b>Package interest:</b> ${escapeHtml(data.packageInterest || "Not sure yet")}`,
    "",
    `<b>What should improve:</b> ${escapeHtml(data.message || "Not specified")}`,
  ];

  if (data.pageUrl) {
    lines.push("", `<b>Source page:</b> ${escapeHtml(data.pageUrl)}`);
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  let payload: AuditPayload;

  try {
    payload = (await request.json()) as AuditPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.company)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 180);
  const phone = clean(payload.phone, 80);
  const website = normalizeWebsite(clean(payload.website, 220));
  const businessType = clean(payload.businessType, 160);
  const packageInterest = clean(payload.packageInterest, 120);
  const message = clean(payload.message, 1000);

  if (!name || !email || !phone || !website) {
    return Response.json(
      { error: "Please fill name, email, phone, and website." },
      { status: 400 },
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const messageThreadId = process.env.TELEGRAM_MESSAGE_THREAD_ID;

  if (!botToken || !chatId) {
    return Response.json(
      { error: "Telegram delivery is not configured yet." },
      { status: 503 },
    );
  }

  const pageUrl = request.headers.get("referer") ?? "";
  const telegramPayload: Record<string, string | boolean> = {
    chat_id: chatId,
    text: buildTelegramMessage({
      name,
      email,
      phone,
      website,
      businessType,
      packageInterest,
      message,
      pageUrl,
    }),
    parse_mode: "HTML",
    disable_web_page_preview: true,
  };

  if (messageThreadId) {
    telegramPayload.message_thread_id = messageThreadId;
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(telegramPayload),
    },
  );

  if (!response.ok) {
    return Response.json(
      { error: "Could not deliver the request to Telegram." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
