import {createSlice} from "@reduxjs/toolkit"



const styleSlice=createSlice({
    name:"style",
    initialState:{style:true},
    reducers:{
        toggleStyle(state){
            state.style = !state.style
        },
       
    }
    
})
export const styleActions = styleSlice.actions;
export default styleSlice