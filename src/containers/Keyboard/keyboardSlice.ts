import {createSlice} from "@reduxjs/toolkit";

interface KeyboardState {
    value: string;
    background: string;
    message: string;
}

const initialState: KeyboardState = {
    value: '',
    background: '#eee',
    message: '',
};

const correctPassword = '1345';

export const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState,
    reducers: {
        addPassword: (state, action) => {
            if (state.value.length < 4) {
                state.value += action.payload;
            }
        },

        removePassword: (state) => {
            state.value = state.value.slice(0, -1);
        },

        checkCorrectPassword: (state) => {
            if (state.value === correctPassword) {
                state.background = 'green';
                state.message = 'Access Granted';
            } else {
                state.message = 'Access Denied';
                state.background = 'red';
            }
        },

        restartPassword: (state) => {
            state.background = '#eee';
            state.message = '';
            state.value = '';
        }
    }
});

export const keyboardReducer = keyboardSlice.reducer;

export const { addPassword, removePassword , checkCorrectPassword,restartPassword} = keyboardSlice.actions;