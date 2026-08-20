import katex from 'katex';

interface MathProps {
  math: string;
  block?: boolean;
  className?: string;
}

export default function Math({ math, block = false, className = '' }: MathProps) {
  const html = katex.renderToString(math, {
    displayMode: block,
    throwOnError: false,
  });

  if (block) {
    return (
      <div
        className={`my-6 overflow-x-auto text-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
