import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


interface InitialState {
    users: IUser[];
}

const initialState: InitialState = {
    users: []
}

type DraftUser = Pick<IUser, "userName" | "userEmail">

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData };
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData);
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});

export const selectUsers = (state: RootState) => {
    return state.user.users;

};


export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;