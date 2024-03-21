import { z } from "zod"

export const signinValid = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});
export const signupValid = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Must be 5 or more characters long" }),
    confirm: z.string()
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
});