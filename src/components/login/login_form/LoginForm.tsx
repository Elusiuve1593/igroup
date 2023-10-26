import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../../bll/login/operations"
import { FormInput } from "../../../shared/formInput/FormInput"
import { Agreement } from "../../../shared/agreement/Agreement"
import { schema } from "./utils/schema"
import { useAppDispatch } from "../../../bll/store"
import {
    Button,
    ErrorMessage,
    ErrorMessageContainer,
    ErrorMessageInput,
    FormContainer,
    FormLogin,
    Input,
    RegisterContainer,
    RegisterLink,
    SubTitle,
    Title
} from "../Login.styled"

export type FormValues = {
    username: string
    password: string
}

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [errorAuth, setErrorAuth] = useState<number | null>(null)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const form = useForm<FormValues>({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
        mode: "onBlur"
    })
    const { register, handleSubmit, formState } = form
    const { errors, isValid } = formState


    const onSubmit = async (data: FormValues) => {
        const res = await dispatch(logIn(data))
        if (logIn.fulfilled.match(res)) {
            navigate("/table")
        }
    }

    return (
        <>
            <FormContainer>
                <div>
                    <Title>Раді вас бачити!</Title>
                    <SubTitle>Увійдіть в ваш профіль!</SubTitle>
                    <FormLogin onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            label="E-mail"
                            hasError={Boolean(errors?.username)}>
                            <Input
                                placeholder=""
                                {...register("username", {
                                    required: "Заповніть поле",
                                    onChange: () => setErrorAuth(null),
                                })}
                            />
                        </FormInput>

                        {errors?.username && (
                            <ErrorMessageInput>
                                {errors.username.message}
                            </ErrorMessageInput>
                        )}
                        <FormInput
                            label="Пароль"
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                            isLast
                            hasError={Boolean(errors?.password)}
                        >
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder=""
                                {...register("password", {
                                    required: "Заповніть поле",
                                    onChange: () => setErrorAuth(null),
                                })}
                            />
                        </FormInput>

                        <ErrorMessageContainer
                            $hasError={Boolean(errors?.password || errorAuth)}
                        >
                            {errors?.password && (
                                <ErrorMessage>
                                    {errors.password.message}
                                </ErrorMessage>
                            )}
                            {errorAuth === 401 && (
                                <ErrorMessage>
                                    Невірний пароль або email
                                </ErrorMessage>
                            )}

                        </ErrorMessageContainer>

                        <Button disabled={!isValid}>
                            Увійти
                        </Button>
                        <RegisterContainer>
                            <p>Ще не маєте облікового запису?</p>
                            <RegisterLink to="#">
                                Створіть
                            </RegisterLink>
                        </RegisterContainer>
                    </FormLogin>
                </div>
                <Agreement />
            </FormContainer>
        </>
    )
}