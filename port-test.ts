import { renderBodygraphSVG, parseChartSource } from "./src/hdchart/render";
import { readFileSync, writeFileSync } from "fs";
const src = readFileSync(process.argv[2], "utf8");
const mode = (process.argv[4] || "dark") as "dark" | "light";
writeFileSync(process.argv[3], renderBodygraphSVG(parseChartSource(src), mode));
