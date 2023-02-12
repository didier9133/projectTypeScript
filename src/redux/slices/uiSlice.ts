import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpen:false
}

interface ActionType{
    payload:boolean,
    type:string
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
      SET_OPEN: (state, acttions:ActionType) => {
        state.isOpen= acttions.payload
      },
    }
})

export const {SET_OPEN}=uiSlice.actions
export default uiSlice.reducer