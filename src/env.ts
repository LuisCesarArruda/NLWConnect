import { z } from "zod"

const envschema = z.object({
    PORT: z.coerce.number().default(3333),
    POSTGRES_URL: z.string().url(),
    REDIS_URL: z.string().url(),
    WEB_URL: z.string().url(),
})

export const env = envschema.parse(process.env)
