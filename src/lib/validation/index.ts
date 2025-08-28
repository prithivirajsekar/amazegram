import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { error: 'Too Short' }),
    username: z.string().min(2, { error: 'Too Short' }),
    email: z.email(),
    password: z.string().min(8, { error: 'Password must be atleast 8 Characters' })

})