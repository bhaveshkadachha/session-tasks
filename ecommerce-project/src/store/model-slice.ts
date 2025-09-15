import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
    name: 'model',
    initialState: { isModelOpen: false },
    reducers: {
        onOpen: (state)=>{
            state.isModelOpen = true
        },
        onClose: (state)=>{
            state.isModelOpen = false
        }
    }
})

export const modelActions = modelSlice.actions
export default modelSlice.reducer