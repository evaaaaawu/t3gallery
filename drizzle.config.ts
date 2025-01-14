import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.STORAGE_POSTGRES_URL,
  },
  tablesFilter: ["t3gallery_*"],
} satisfies Config;
