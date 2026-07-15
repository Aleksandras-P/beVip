import z, { email, object, string } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "Name must contain atleast 3 characters"),
    email: z.email("Invalid email"),
    password: z.string().min(8, "Password must contain atleast 8 characters") 
});

export const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "Password is required")
})