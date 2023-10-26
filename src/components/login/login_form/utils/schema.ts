import * as yup from 'yup'

export const schema = yup
  .object({
    username: yup
      .string()
      .required("Заповніть поле")
      .max(150)
    ,
    password: yup
      .string()
      .required("Заповніть поле")
      .min(8, "Пароль має містити мінімум 8 символів")
      .max(150)
    ,
  })
  .required()
