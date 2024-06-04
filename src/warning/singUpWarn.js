import * as Yup from 'yup'

export const singUp = Yup.object({
    firstName: Yup.string().min(3).max(15).required("enter yuer first name"),
    lastName: Yup.string().min(3).max(15).required("enter yuer last name"),
    email: Yup.string().email().required("enter yuer valide email"),
    password: Yup.string().min(6).required("enter yuer valide password"),
    gender: Yup.string().required("select your gender"),
})