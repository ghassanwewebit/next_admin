import {createSlice} from "@reduxjs/toolkit"



const authSlice=createSlice({
    name:"authentications",
    initialState:{token:null},
    reducers:{
        login(state,actions){
            state.token = actions.payload
            
        },
        logout(state){
            state.token=null
        }
    }
    
})
export const authAutions = authSlice.actions;
export default authSlice