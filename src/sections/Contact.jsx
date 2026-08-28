import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";
import { isValidEmail } from "../utils/validateEmail.js";
import Reveal from "../components/Reveal.jsx";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const initialValues = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the person starts fixing it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!isValidEmail(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!values.message.trim()) {
      nextErrors.message = "Please write a message.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!isEmailConfigured) {
      // EmailJS hasn't been configured yet (see .env.example). Fail clearly
      // instead of pretending the message was sent.
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: personalInfo.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">// 07. contact</p>
          <h2 className="section-heading">Let's talk</h2>
          <p className="section-lede">
            Have an opportunity, a project, or just want to say hi? My inbox is open.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={1} className="contact-info">
            <a className="contact-info-item" href={`mailto:${personalInfo.email}`}>
              <Mail size={18} aria-hidden="true" />
              <span>{personalInfo.email}</span>
            </a>
            {personalInfo.location && personalInfo.location !== "[MY LOCATION]" && (
              <p className="contact-info-item">
                <MapPin size={18} aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </p>
            )}
          </Reveal>

          <Reveal delay={2} as="form" className="contact-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                autoComplete="name"
              />
              {errors.name && (
                <p className="form-error" id="contact-name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <p className="form-error" id="contact-email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              />
              {errors.subject && (
                <p className="form-error" id="contact-subject-error" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && (
                <p className="form-error" id="contact-message-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <Loader2 size={18} className="spin" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send size={16} aria-hidden="true" />
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="form-status form-status-success">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Thanks — your message has been sent. I'll reply as soon as I can.
                </p>
              )}
              {status === "error" && !isEmailConfigured && (
                <p className="form-status form-status-error">
                  <AlertCircle size={18} aria-hidden="true" />
                  The contact form isn't connected to an email service yet. Add your
                  EmailJS keys to a <code>.env</code> file (see <code>.env.example</code>) to
                  enable it, or reach out directly at{" "}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                </p>
              )}
              {status === "error" && isEmailConfigured && (
                <p className="form-status form-status-error">
                  <AlertCircle size={18} aria-hidden="true" />
                  Something went wrong sending your message. Please try again, or email{" "}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> directly.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
