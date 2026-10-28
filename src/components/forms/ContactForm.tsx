import React, { useState } from "react";
import { AlertTriangleIcon, MailIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { site } from "../../data/site";
import { buildMailto, openMailto } from "../../utils/mailto";
import { isValidEmail } from "../../utils/validation";
import { buttonStyles } from "../../utils/styles";
import type { ContactTranslations } from "../../i18n/types";
import { Field, fieldInputClass } from "./Field";

type InquiryKey = keyof ContactTranslations["inquiries"];
type FieldName = "name" | "email" | "subject" | "message";
type ErrorKey = Exclude<keyof ContactTranslations["errors"], "summary">;

interface Values {
  inquiry: InquiryKey;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inquiryKeys: InquiryKey[] = ["general", "collaboration", "media", "tourism"];
const fieldOrder: FieldName[] = ["name", "email", "subject", "message"];

export function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;
  const [values, setValues] = useState<Values>({ inquiry: "general", name: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [opened, setOpened] = useState(false);

  const allErrors = validate(values);
  const visibleError = (field: FieldName): string | undefined => {
    const key = allErrors[field];
    return key && (attempted || touched[field]) ? c.errors[key] : undefined;
  };
  const hasVisibleErrors = attempted && Object.keys(allErrors).length > 0;

  const update = <K extends keyof Values,>(field: K, value: Values[K]) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setOpened(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const firstInvalid = fieldOrder.find((field) => allErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    const topic = c.inquiries[values.inquiry].title;
    const body = [
    `${c.mailLabels.inquiry}: ${topic}`,
    `${c.mailLabels.name}: ${values.name.trim()}`,
    `${c.mailLabels.email}: ${values.email.trim()}`,
    "",
    values.message.trim()].
    join("\n");
    openMailto(buildMailto(site.contactEmail, `[${topic}] ${values.subject.trim()}`, body));
    setOpened(true);
  };

  const describedBy = (field: FieldName) => visibleError(field) ? `contact-${field}-error` : undefined;

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-8">
      <p className="text-xs text-muted">{t.common.requiredLegend}</p>

      {hasVisibleErrors &&
      <div role="alert" className="flex items-start gap-3 rounded-lg border border-eth-red/30 bg-eth-red/5 px-4 py-3 text-sm text-eth-red">
          <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {c.errors.summary}
        </div>
      }

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">{c.inquiryLegend}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {inquiryKeys.map((key) => {
            const selected = values.inquiry === key;
            return (
              <label key={key} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="inquiry"
                  value={key}
                  checked={selected}
                  onChange={() => update("inquiry", key)}
                  className="peer sr-only" />
                
                <span
                  className={`flex h-full flex-col rounded-lg border p-4 transition-[border-color,background-color] duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-gold ${
                  selected ? "border-forest bg-forest/5" : "border-sand bg-ivory hover:border-forest/40"}`
                  }>
                  
                  <span className="flex items-start justify-between gap-3 font-medium text-ink">
                    {c.inquiries[key].title}
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      selected ? "border-forest" : "border-ink/30"}`
                      }>
                      
                      {selected && <span className="h-2 w-2 rounded-full bg-forest" />}
                    </span>
                  </span>
                  <span className="mt-1 text-sm text-muted">{c.inquiries[key].description}</span>
                </span>
              </label>);

          })}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="contact-name" label={c.form.name} required requiredLabel={t.common.requiredMark} error={visibleError("name")}>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={values.name}
            placeholder={c.form.namePlaceholder}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, name: true }))}
            aria-invalid={Boolean(visibleError("name"))}
            aria-describedby={describedBy("name")}
            required
            className={fieldInputClass(Boolean(visibleError("name")))} />
          
        </Field>
        <Field id="contact-email" label={c.form.email} required requiredLabel={t.common.requiredMark} error={visibleError("email")}>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            placeholder={c.form.emailPlaceholder}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, email: true }))}
            aria-invalid={Boolean(visibleError("email"))}
            aria-describedby={describedBy("email")}
            required
            className={fieldInputClass(Boolean(visibleError("email")))} />
          
        </Field>
      </div>

      <Field id="contact-subject" label={c.form.subject} required requiredLabel={t.common.requiredMark} error={visibleError("subject")}>
        <input
          id="contact-subject"
          type="text"
          value={values.subject}
          placeholder={c.form.subjectPlaceholder}
          onChange={(e) => update("subject", e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, subject: true }))}
          aria-invalid={Boolean(visibleError("subject"))}
          aria-describedby={describedBy("subject")}
          required
          className={fieldInputClass(Boolean(visibleError("subject")))} />
        
      </Field>

      <Field id="contact-message" label={c.form.message} required requiredLabel={t.common.requiredMark} error={visibleError("message")}>
        <textarea
          id="contact-message"
          rows={6}
          value={values.message}
          placeholder={c.form.messagePlaceholder}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, message: true }))}
          aria-invalid={Boolean(visibleError("message"))}
          aria-describedby={describedBy("message")}
          required
          className={`${fieldInputClass(Boolean(visibleError("message")))} resize-y`} />
        
      </Field>

      <div className="flex flex-col gap-4 border-t border-sand pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-muted">{c.notice}</p>
        <button type="submit" className={`${buttonStyles.primary} shrink-0`}>
          <MailIcon className="h-4 w-4" aria-hidden="true" />
          {c.form.submit}
        </button>
      </div>

      <div role="status" aria-live="polite">
        {opened &&
        <p className="rounded-lg border border-gold/40 bg-cream px-4 py-3 text-sm text-ink">
            {c.afterSubmit}{" "}
            <a href={`mailto:${site.contactEmail}`} className="break-all font-semibold text-forest underline underline-offset-4">
              {site.contactEmail}
            </a>
          </p>
        }
      </div>
    </form>);

}

function validate(values: Values): Partial<Record<FieldName, ErrorKey>> {
  const errors: Partial<Record<FieldName, ErrorKey>> = {};
  if (!values.name.trim()) errors.name = "nameRequired";
  if (!values.email.trim()) errors.email = "emailRequired";else
  if (!isValidEmail(values.email)) errors.email = "emailInvalid";
  if (!values.subject.trim()) errors.subject = "subjectRequired";
  if (!values.message.trim()) errors.message = "messageRequired";else
  if (values.message.trim().length < 20) errors.message = "messageShort";
  return errors;
}