import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "../utils/appSlice";

const store = configureStore({
  reducer: { // Correct key is 'reducer'
    sidebar: SidebarReducer,
  },
});

export default store;
