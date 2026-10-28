import React, { useState } from "react";
import { AlertTriangleIcon, MailIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { site } from "../../data/site";
import { countries } from "../../data/countries";
import { buildMailto, openMailto } from "../../utils/mailto";
import { isValidEmail } from "../../utils/validation";
import { buttonStyles } from "../../utils/styles";
import type { RegistrationTranslations } from "../../i18n/types";
import { Field, fieldInputClass } from "./Field";

type FieldName = "name" | "email" | "country";
type ErrorKey = Exclude<keyof RegistrationTranslations["errors"], "summary">;
type Values = Record<FieldName, string>;

const fieldOrder: FieldName[] = ["name", "email", "country"];

/*
 * "Stay connected" interest form. No account is created and nothing is stored —
 * submitting prepares an email in the visitor's own email app.
 */
export function RegistrationForm() {
  const { t } = useLanguage();
  const r = t.registration;
  const [values, setValues] = useState<Values>({ name: "", email: "", country: "" });
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [opened, setOpened] = useState(false);

  const allErrors = validate(values);
  const visibleError = (field: FieldName): string | undefined => {
    const key = allErrors[field];
    return key && (attempted || touched[field]) ? r.errors[key] : undefined;
  };
  const hasVisibleErrors = attempted && Object.keys(allErrors).length > 0;

  const update = (field: FieldName, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setOpened(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const firstInvalid = fieldOrder.find((field) => allErrors[field]);
    if (firstInvalid) {
      document.getElementById(`register-${firstInvalid}`)?.focus();
      return;
    }
    const body = [
    r.mailIntro,
    "",
    `${r.mailLabels.name}: ${values.name.trim()}`,
    `${r.mailLabels.email}: ${values.email.trim()}`,
    `${r.mailLabels.country}: ${values.country.trim()}`].
    join("\n");
    openMailto(buildMailto(site.contactEmail, r.mailSubject, body));
    setOpened(true);
  };

  const inputProps = (field: FieldName) => ({
    id: `register-${field}`,
    value: values[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => update(field, e.target.value),
    onBlur: () => setTouched((p) => ({ ...p, [field]: true })),
    "aria-invalid": Boolean(visibleError(field)),
    "aria-describedby": visibleError(field) ? `register-${field}-error` : undefined,
    required: true,
    className: fieldInputClass(Boolean(visibleError(field)))
  });

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xs text-muted">{t.common.requiredLegend}</p>

      {hasVisibleErrors &&
      <div role="alert" className="flex items-start gap-3 rounded-lg border border-eth-red/30 bg-eth-red/5 px-4 py-3 text-sm text-eth-red">
          <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {r.errors.summary}
        </div>
      }

      <Field id="register-name" label={r.form.name} required requiredLabel={t.common.requiredMark} error={visibleError("name")}>
        <input type="text" autoComplete="name" placeholder={r.form.namePlaceholder} {...inputProps("name")} />
      </Field>
      <Field id="register-email" label={r.form.email} required requiredLabel={t.common.requiredMark} error={visibleError("email")}>
        <input type="email" inputMode="email" autoComplete="email" placeholder={r.form.emailPlaceholder} {...inputProps("email")} />
      </Field>
      <Field id="register-country" label={r.form.country} required requiredLabel={t.common.requiredMark} error={visibleError("country")}>
        <input
          type="text"
          autoComplete="country-name"
          list="country-suggestions"
          placeholder={r.form.countryPlaceholder}
          {...inputProps("country")} />
        
        <datalist id="country-suggestions">
          {countries.map((country) =>
          <option key={country} value={country} />
          )}
        </datalist>
      </Field>

      <div className="rounded-lg bg-cream px-4 py-4 text-sm text-muted">
        <p className="font-semibold text-ink">{r.privacyTitle}</p>
        <p className="mt-1">{r.privacy}</p>
      </div>

      <button type="submit" className={`${buttonStyles.primary} w-full sm:w-auto`}>
        <MailIcon className="h-4 w-4" aria-hidden="true" />
        {r.form.submit}
      </button>

      <div role="status" aria-live="polite">
        {opened &&
        <p className="rounded-lg border border-gold/40 bg-cream px-4 py-3 text-sm text-ink">{r.afterSubmit}</p>
        }
      </div>
    </form>);

}

function validate(values: Values): Partial<Record<FieldName, ErrorKey>> {
  const errors: Partial<Record<FieldName, ErrorKey>> = {};
  if (!values.name.trim()) errors.name = "nameRequired";
  if (!values.email.trim()) errors.email = "emailRequired";else
  if (!isValidEmail(values.email)) errors.email = "emailInvalid";
  if (!values.country.trim()) errors.country = "countryRequired";
  return errors;
}