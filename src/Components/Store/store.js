import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../Counter/counterSlice';
export default configureStore({
    reducer:{
        counter: counterSlice,
    }
})