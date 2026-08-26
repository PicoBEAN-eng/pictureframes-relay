import esbuild from "esbuild";
await esbuild.build({ entryPoints: ["port-test.ts"], bundle: true, platform: "node", format: "cjs", outfile: process.env.OUT });
