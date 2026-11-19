/** Keeps hyphenated words like "AEO-SEO" or "content-creation" on one line in headings. */
export const nowrapHyphens = (text: string) =>
  text.replace(/(\S+-\S+)/g, '<span class="nw">$1</span>');
