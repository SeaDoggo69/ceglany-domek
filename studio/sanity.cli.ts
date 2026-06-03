import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "TODO_PROJECT_ID",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // Custom studio hostname -> https://ceglany-domek.sanity.studio
  studioHost: "ceglany-domek",
});
