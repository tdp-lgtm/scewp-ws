/** Shared formatting and helper utilities. */

/** Format a Date as e.g. "15 September 2026". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Format a Date as short parts for an event date block. */
export function dateParts(date: Date): { day: string; month: string; year: string } {
  return {
    day: new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date),
    year: new Intl.DateTimeFormat("en-GB", { year: "numeric" }).format(date),
  };
}

/**
 * Format an array of author strings (already in "Last, F." style) into a
 * single bibliography string, e.g. "Frowe, H., & Häeg, J.".
 */
export function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0]!;
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
  return `${authors.slice(0, -1).join(", ")}, & ${authors[authors.length - 1]}`;
}

/** Truncate text to a maximum number of characters at a word boundary. */
export function excerpt(text: string, max = 160): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

/** Determine whether an event is upcoming relative to "now". */
export function isUpcoming(startDate: Date, now: Date = new Date()): boolean {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return startDate.getTime() >= today.getTime();
}

/** Loosely test whether a person (by name) is among a publication's authors. */
export function nameMatchesAuthor(personName: string, author: string): boolean {
  const surname = personName.trim().split(/\s+/).pop()?.toLowerCase() ?? "";
  return surname.length > 1 && author.toLowerCase().includes(surname);
}
