import * as yup from "yup";

export const schemaRegisterClient = yup.object().shape({
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    name: yup.string().required("Nome é obrigatório"),
    password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial"),
    phone: yup
    .string()
    .min(11, "No mínimo 11 caracteres")
    .max(13, "No máximo 13 caracteres")
    .required("Numero de contato é obrigatório"),
})