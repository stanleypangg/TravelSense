import { z } from "zod";

export const RegisterSchema = z
    .object({
        username: z.string(),
        email:    z.string().email(),
        password: z.string().min(8),
    })
    .strict(); // no extra keys

export type RegisterDTO = z.infer<typeof RegisterSchema>;

export const LoginSchema = z
    .object({
        username: z.string(),
        password: z.string(),
    })
    .strict();

export type LoginDTO = z.infer<typeof LoginSchema>;