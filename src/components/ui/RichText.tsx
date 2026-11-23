import { Fragment, type ReactNode } from "react";

import { wowDelay } from "@/lib/animation";

/*
 * Renders the CMS's rich-text (Markdown) fields with the template's own markup and classes.
 * Supports what editors need for this site — paragraphs, ## / ### headings, "- " lists,
 * "> " quotes, **bold**, *italic* and [links](https://…) — and builds React elements
 * directly, so no HTML from the CMS is ever injected into the page.
 */

type Block =
  | { type: "p"; text: string }
  | { type: "h2" | "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

function parseBlocks(markdown: string): Block[] {
  return markdown
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk): Block => {
      const lines = chunk.split("\n").map((l) => l.trim());
      if (/^###\s/.test(chunk)) return { type: "h3", text: chunk.replace(/^###\s+/, "") };
      if (/^##\s/.test(chunk)) return { type: "h2", text: chunk.replace(/^##\s+/, "") };
      if (lines.every((l) => /^[-*]\s/.test(l))) return { type: "ul", items: lines.map((l) => l.replace(/^[-*]\s+/, "")) };
      if (lines.every((l) => l.startsWith(">"))) return { type: "quote", text: lines.map((l) => l.replace(/^>\s?/, "")).join(" ") };
      return { type: "p", text: lines.join(" ") };
    });
}

const SAFE_HREF = /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i;
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;

function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (!SAFE_HREF.test(href)) return <Fragment key={i}>{label}</Fragment>;
      const external = /^https?:\/\//i.test(href);
      return (
        <a key={i} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {label}
        </a>
      );
    }
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

interface RichTextProps {
  text: string;
  /** Add the template's scroll-in animation (`wow fadeInUp`, staggered) to each block. */
  animate?: boolean;
  /** Wraps lists, e.g. "service-why-choose-list" for the template's check-mark bullets. */
  listClassName?: string;
}

export function RichText({ text, animate = true, listClassName }: RichTextProps) {
  return (
    <>
      {parseBlocks(text).map((block, index) => {
        const wow = animate ? { className: "wow fadeInUp", "data-wow-delay": wowDelay(Math.min(index, 4)) } : {};
        switch (block.type) {
          case "h2":
            return <h2 key={index} className="text-anime-style-3">{inline(block.text)}</h2>;
          case "h3":
            return <h3 key={index} {...wow}>{inline(block.text)}</h3>;
          case "quote":
            return (
              <blockquote key={index} {...wow}>
                <p>{inline(block.text)}</p>
              </blockquote>
            );
          case "ul": {
            const items = block.items.map((item, i) => <li key={i}>{inline(item)}</li>);
            if (!listClassName) return <ul key={index} {...wow}>{items}</ul>;
            return (
              <div key={index} className={animate ? `${listClassName} wow fadeInUp` : listClassName}>
                <ul>{items}</ul>
              </div>
            );
          }
          default:
            return <p key={index} {...wow}>{inline(block.text)}</p>;
        }
      })}
    </>
  );
}

/** Splits Markdown at its "## " headings: the text before the first heading, then one part per heading. */
export function splitSections(markdown: string): { heading: string | null; body: string }[] {
  const sections: { heading: string | null; body: string[] }[] = [{ heading: null, body: [] }];
  for (const line of markdown.replace(/\r\n/g, "\n").split("\n")) {
    const h = line.match(/^##\s+(.+)$/);
    if (h) sections.push({ heading: h[1].trim(), body: [] });
    else sections[sections.length - 1].body.push(line);
  }
  return sections
    .map((s) => ({ heading: s.heading, body: s.body.join("\n").trim() }))
    .filter((s) => s.heading || s.body);
}
