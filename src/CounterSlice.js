import { createSlice } from "@reduxjs/toolkit";

const intialStateValues={
    count:0,
}
export const counterSlice=createSlice({
    name:'counter',
    initialState:intialStateValues,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>{
            state.count=0
        },
        addBy:(state,action)=>{
            state.count+=action.payload
        },
        minusBy:(state,action)=>{
            state.count-=action.payload
        }
    }
})
export default counterSlice.reducer;
export const { increment, decrement, addBy, minusBy,reset } = counterSlice.actions