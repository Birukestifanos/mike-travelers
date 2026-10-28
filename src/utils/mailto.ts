export function buildMailto(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Hands the prefilled message to the visitor's own email app. Nothing is sent by the site. */
export function openMailto(url: string): void {
  window.location.href = url;
}