import {createSlice} from "@reduxjs/toolkit"
import jwt_decode from "jwt-decode";


const authSlice=createSlice({
    name:"authentications",
    initialState:{token:null,User:{},usersData:{}},
    reducers:{
        login(state,actions){
            const newToken=actions.payload.split("Bearer")[1]
            var decoded = jwt_decode(newToken);
            state.token=newToken
            
        },
        logout(state){
            state.token=null
        },
        setUsersData(state,actions){
            state.usersData=actions.payload
        }
    }
    
})
export const authAutions = authSlice.actions;
export default authSlice