import { configureStore } from '@reduxjs/toolkit';

import styleSlice from './styleStore'
import authSlice from './authStore'

const store=configureStore({
    reducer :{ 
        style : styleSlice.reducer,
        auth:authSlice.reducer}
    
})
export default store