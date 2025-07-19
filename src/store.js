import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter"
import userReducer from "./reducer/user.reducer";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {counter: counterReducer, user: userReducer},

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})