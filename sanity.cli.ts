import { defineCliConfig } from "sanity/cli";

// Lets the Sanity CLI (e.g. `sanity dataset import`, `sanity deploy`)
// know which project/dataset to target.
export default defineCliConfig({
  api: {
    projectId: "nv493njf",
    dataset: "production",
  },
});
