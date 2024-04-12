import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./control/courseSlice";

export const store = configureStore({
	reducer: {
		courses: courseReducer,
	},
});
