async function main() {
  const pdfPath = process.argv[2];

  if (!pdfPath) {
    throw new Error("Usage: node extract_defense.js <path-to-pdf>");
  }

  const { readFile } = await import("node:fs/promises");
  const { PDFParse } = await import("pdf-parse");
  const data = await readFile(pdfPath);
  const parser = new PDFParse({ data });

  try {
    const result = await parser.getText();
    console.log(result.text.slice(0, 15000));
  } finally {
    await parser.destroy();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
