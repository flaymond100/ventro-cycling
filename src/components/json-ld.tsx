// Server-safe helper that renders a JSON-LD <script> tag.
// Import directly from "@/components/json-ld" (NOT the client barrel) so it can
// be used in both server layouts and client pages. JSON-LD is valid anywhere in
// the document and is pre-rendered into the static HTML at build time.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;
