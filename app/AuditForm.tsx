"use client";

import { useState, type FormEvent } from "react";

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "sending"; message: "Sending..." }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const packageOptions = [
  "Website Rescue",
  "Request System",
  "Growth Setup",
  "Advertising management",
  "Not sure yet",
];

export function AuditForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitState({ status: "sending", message: "Sending..." });

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Could not send the request.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: "Request sent. We will review the site and follow up shortly.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Could not send the request.",
      });
    }
  }

  return (
    <form
      className="audit-card audit-form"
      onSubmit={handleSubmit}
      aria-label="Free website audit form"
    >
      <h3>Request free audit</h3>
      <div className="hidden-field" aria-hidden="true">
        <label>
          <span>Company</span>
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          <span>Website</span>
          <input name="website" type="url" placeholder="https://" required />
        </label>
        <label>
          <span>Business type</span>
          <input
            name="businessType"
            type="text"
            placeholder="HVAC, plumbing, roofing..."
          />
        </label>
        <label>
          <span>Package interest</span>
          <select name="packageInterest" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {packageOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>What should improve?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="More calls, better site, ads, follow-up..."
        />
      </label>
      <button
        className="button primary form-submit"
        type="submit"
        disabled={submitState.status === "sending"}
      >
        {submitState.status === "sending" ? "Sending..." : "Send audit request"}
      </button>
      {submitState.message ? (
        <p className={`form-status ${submitState.status}`}>
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
