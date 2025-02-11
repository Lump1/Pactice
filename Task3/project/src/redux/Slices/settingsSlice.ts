import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isSoundOn: true,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setStateManual: (state, action: PayloadAction<{name: string, value: any}>) => {
            if(state[action.payload.name] == undefined) console.error("There's no state with this name! Name: " + action.payload);
            else {
                state[action.payload.name] = action.payload.value;
            }
        },
        switchBoolState: (state, action) => {
            if(state[action.payload] == undefined) console.error("There's no state with this name! Name: " + action.payload);
            else {
                state[action.payload] = state[action.payload] == true ? false : true;
            }
        },
    },
});

export const { setStateManual, switchBoolState } = settingsSlice.actions;
export default settingsSlice.reducer;