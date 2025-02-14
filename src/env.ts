import { z } from "zod";

//zod é um validator para garantir que as variáveis de ambiente estão corretas
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.parse(process.env);

if (!parsedEnv) {
  console.error("Invalid environment variables");

  throw new Error("Invalid environment variables");
}

export const env = parsedEnv;
