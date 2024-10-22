import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import firstLoadReducer from "./slices/firstLoadSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    firstLoad : firstLoadReducer
  },
});

export default store;