import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    PAYLOAD_PUBLIC_SERVER_URL: z.string().url(),
    PAYLOAD_SECRET: z.string().min(24),
    DATABASE_URI: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_SERVER_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    PAYLOAD_PUBLIC_SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  }
});
