import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TableType, Users } from './operations';

const initialState = {} as TableType

const authSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTable(state, action: PayloadAction<{ table: Users[] }>) {
            state.results = action.payload.table
        },
        editRaw(state, action: PayloadAction<{ users: Users }>) {
            const updatedUser = action.payload.users
            const userIndex = state.results.findIndex((user) => user.id === updatedUser.id)
            if (userIndex !== -1) {
                state.results[userIndex] = updatedUser
            }
        }
    }
})

export const { setTable, editRaw } = authSlice.actions
export default authSlice.reducer