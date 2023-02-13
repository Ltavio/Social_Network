import * as yup from "yup";

export const loginSchema= yup.object().shape({
  email: yup.string()
    .email()
    .required("Por favor, verifique se seu email está correto"),
  password: yup.string().required("Por favor, verifique se sua senha está correta"),
});