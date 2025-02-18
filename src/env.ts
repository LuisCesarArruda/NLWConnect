import { z } from "zod"

const envschema = z.object({
    PORT: z.coerce.number().default(3333),
    // DATABASE_URL: z.string(),
})

export const env = envschema.parse(process.env)
