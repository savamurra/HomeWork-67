import {createSlice} from "@reduxjs/toolkit";


interface CalculatorState {
    value: string;
    result: string;
}

const initialState: CalculatorState = {
    value: '',
    result: '',
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.value += action.payload;
        },

        checkResult: (state) => {
            state.result = eval(state.value.toString());
        },

        clearResult: (state) => {
            state.value = '';
            state.result = '';
        },

        removeNumber: (state) => {
            state.value = state.value.slice(0, -1);
        }
    }
});
export const calculatorReducer = calculatorSlice.reducer;
export const { addNumber, checkResult ,clearResult,removeNumber} = calculatorSlice.actions;