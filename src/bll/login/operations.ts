import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { instance } from '../axiosConfig'

export type LoginType = {
    username: string
    password: string
    status: "idle" | "loading" | "succeeded" | "failed"
    error: string | null | undefined
}

type MyThunkOptions = {
    rejectValue: string
}

type CredentialsOptions = {
    username: string
    password: string
}

const style = {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontSize: "20px"
}

export const logIn = createAsyncThunk<
    LoginType,
    CredentialsOptions,
    MyThunkOptions
>('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const res = await instance.post("login/", credentials)
        return res.data
    } catch (err: any) {
        if (axios.isAxiosError(err)) {
            if (axios.isAxiosError(err)) {
                const axiosError = err as AxiosError<any>
                if (axiosError.response?.data) {
                    toast.error(axiosError.response.statusText, { style })
                }
                if (axiosError.message === "Network Error") {
                    toast.error(axiosError.message, { style })
                }
                return rejectWithValue(err.response?.data)
            }
        }
    }
})