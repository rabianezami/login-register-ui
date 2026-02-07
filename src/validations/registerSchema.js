import * as yup from "yup";

export const registerSchema = yup.object({
    fullName: yup 
    .string()
    .trim()
    .required("Full name is required"),

    email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email."),

    password: yup
    .string()
    .trim()
    .required()
    .min(8, "Password must be at least 8 charachters."),

    confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required.")
    .oneOf([yup.ref("password")], "Password don not match.")
})