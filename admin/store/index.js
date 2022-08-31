import { configureStore } from '@reduxjs/toolkit';

import styleSlice from './styleStore'
import authSlice from './authStore'
import BreadCrumbSlice from './BreadcrumbStore';

const store=configureStore({
    reducer :{ 
        style : styleSlice.reducer,
        auth:authSlice.reducer,
        BreadCrumb:BreadCrumbSlice.reducer
    }
    
})
export default store