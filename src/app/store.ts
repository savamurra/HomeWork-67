import {configureStore} from "@reduxjs/toolkit";
import {keyboardReducer} from "../containers/Keyboard/keyboardSlice.ts";
import {calculatorReducer} from "../containers/Calculator/calculatorSlice.ts";

export const store = configureStore({
    reducer: {
        keyboard: keyboardReducer,
        calculator: calculatorReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;