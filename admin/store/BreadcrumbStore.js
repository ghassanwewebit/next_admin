import {createSlice} from "@reduxjs/toolkit"



const BreadCrumbSlice=createSlice({
    name:"BreadCrumb",
    initialState:{items:[]},
    reducers:{
        BreadCrumbHandler(state,actions){
            state.items = actions.payload
        },
       
    }
    
})
export const BreadCrumbActions = BreadCrumbSlice.actions;
export default BreadCrumbSlice