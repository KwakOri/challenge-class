import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";

// 스토어 생성
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
