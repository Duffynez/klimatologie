import { renderToString } from "katex";

function typeset(tex: string, displayMode: boolean) {
  return renderToString(tex, {
    displayMode,
    output: "htmlAndMathml",
    throwOnError: true,
    strict: "error",
    trust: false,
  });
}

/** Each part stays intact, while long equations wrap between complete terms. */
export function Equation({ tex }: { tex: string | readonly string[] }) {
  const parts = typeof tex === "string" ? [tex] : tex;
  return (
    <div className="article-equation">
      {parts.map((part, index) => (
        <span className="article-equation__part" key={index}
          dangerouslySetInnerHTML={{ __html: typeset(part, true) }} />
      ))}
    </div>
  );
}

export function InlineMath({ tex }: { tex: string }) {
  return <span className="article-math" dangerouslySetInnerHTML={{ __html: typeset(tex, false) }} />;
}
