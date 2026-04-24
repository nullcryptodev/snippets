/**
 * no need to "compete" for a platform that hosts all cardano projects
 * so instead, we use what CF already knows by utilising the dev portal
 * static files via GitHub.
 */

export interface builder_tool {
  title: string;
  description: string;
  preview: string;
  website: string;
  getstarted: string | null;
  tags: string[];
}

export async function fetch_builder_tools(): Promise<builder_tool[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/cardano-foundation/developer-portal/refs/heads/staging/src/data/builder-tools/tools.js"
  );

  const text = await res.text();

  // Extract the array content
  const match = text.match(/export const BuilderTools = (\[.*\]);/s);
  if (!match) throw new Error("Failed to parse BuilderTools");

  let raw = match[1];

  // Replace require("./images/...") with just the filename
  raw = raw.replace(/require\("\.\/images\/(.*?)"\)/g, '"$1"');

  // Convert to valid JSON
  const tools = new Function(`return ${raw}`)();

  return tools.map((tool: any) => ({
    ...tool,
    preview: get_image_url(tool.preview),
  }));
}

// helper function to bind project images
function get_image_url(fileName: string) {
  return `https://raw.githubusercontent.com/cardano-foundation/developer-portal/staging/src/data/builder-tools/images/${fileName}`;
}
