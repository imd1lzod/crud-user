import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4, v4 } from "uuid"

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [{ id: uuidv4(), name: "John", age: 20, gender: "male" }]
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push({ id: uuidv4(), ...action.payload })
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        editUser: (state, action) => {
            const newUser = action.payload

            state.users = state.users.map((user) => {
                if (user.id === newUser.id) {
                    return {
                        ...user,
                        name: newUser.name,
                        age: newUser.age,
                        gender: newUser.gender
                    }
                }
                return user
            })

        }
    }
})

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer