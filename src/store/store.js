import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./logSlice";

export default configureStore({
  reducer: {
    logs: logReducer,
  },
});
