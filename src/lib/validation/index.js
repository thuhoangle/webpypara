// import { z } from "zod"
//
// export const signinValid = z.object({
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z.string().min(5, { message: "Must be 5 or more characters long" }),
// });
// export const signupValid = z.object({
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z.string().min(5, { message: "Must be 5 or more characters long" }),
//     confirm: z.string()
// }).refine((data) => data.password === data.confirm, {
//     message: "Passwords don't match",
//     path: ["confirm"],
// });
//
// export const titleValid = z.object({
//     title: z.string().max(15, { message: "Max 12 characters long" }),
//     file: z.custom(),
//     note: z.string().max(30, { message: "Max 30 characters long" }),
//     caption: z.string().max(150, { message: "Max 150 characters long" }),
//
//
// });

export const LoginValid = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 8) {
        errors.password = 'Must be or more';
    }

    return errors;
};

export const SignupValid = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 8) {
        errors.password = 'Must be or more';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
};
