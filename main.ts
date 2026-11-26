import { mkdirSync, writeFileSync } from "node:fs";

// Junkdrawer: the internet holds everything, and none of it is where you expect.
const word = "Junkdrawer";
const outputDir = "/output";
const outputPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, word, "utf8");
console.log(`Wrote ${word.length} characters to ${outputPath}`);
