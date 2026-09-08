import { configureStore } from "@reduxjs/toolkit";
import { reducerSkill } from "./skillSlise";
export const globalState= configureStore({
    reducer: {
        Skills: reducerSkill.reducer
    }
})