import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { instance } from '../axiosConfig'
import { editRaw, setTable } from './slice'

export type TableType = {
    count: number
    next: string
    previous: string
    results: Users[]
}

export type Users = {
    id: number
    name: string
    email: string
    birthday_date: string
    phone_number: string
    address: string
}

const style = {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontSize: "20px"
}

export const fetchTableThunk = createAsyncThunk('fetch_table',
    async (page: number, { dispatch }) => {
        const pageSize = 10
        try {
            const res = await instance.get<TableType>(`table/?limit=${pageSize}&offset=${(page - 1) * pageSize}`)
            dispatch(setTable({ table: res.data.results }))
            return res.data
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message, { style })
            }
        }
    })

export const editRawThunk = createAsyncThunk('update_table',
    async (credentials: Users, { dispatch }) => {
        try {
            const res = await instance.put<Users>(`table/${credentials.id}/`, credentials)
            console.log(res.data)
            dispatch(editRaw({ users: res.data }))
            return res.data
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message, { style })
            }
        }
    })

