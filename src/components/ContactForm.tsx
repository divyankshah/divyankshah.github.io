import { useState, type FormEvent } from "react";
import { formspree } from "../data/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(formspree.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form__success" role="status">
        <p>Thanks for reaching out, your message is on its way. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" className="contact-form__honeypot" tabIndex={-1} autoComplete="off" />

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="contact-form__field">
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <label className="contact-form__field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit" className="btn btn--primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="contact-form__error" role="alert">
          Something went wrong sending that. Please try again, or email me directly.
        </p>
      )}
    </form>
  );
}
