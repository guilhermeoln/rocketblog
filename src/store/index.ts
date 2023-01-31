import { configureStore } from "@reduxjs/toolkit";
import newsSlice from './reducers/news';


const store = configureStore({
    reducer: {
        news: newsSlice
    }
})



export default store;