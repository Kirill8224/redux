import { configureStore } from "@reduxjs/toolkit";
import { reducerSkill } from "./skillSlise";
export const globalState= configureStore({
    reducer: {
        Skills: reducerSkill.reducer
    }
})

export type StoreType= ReturnType<typeof globalState.getState>
export type Dispathtype= typeof globalState.dispatch