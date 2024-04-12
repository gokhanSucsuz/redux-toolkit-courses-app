import { createSlice } from "@reduxjs/toolkit";
import courses from "../courses";

const initialState = {
	courses,
	quantity: 0,
	total: 0,
};

const courseSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		clearCourse: (state) => {
			state.courses = [];
		},
		removeItem: (state, action) => {
			state.courses = state.courses.filter(
				(item) => item.id !== action.payload
			);
		},
		increase: (state, action) => {
			state.courses
				.filter((item) => item.id === action.payload)
				.map((item) => (item.quantity += 1));
		},
		decrease: (state, action) => {
			state.courses
				.filter((item) => item.id === action.payload)
				.map((item) => (item.quantity -= item.quantity < 1 ? 0 : 1));
		},
		totalPrice: (state) => {
			let total = 0;
			let num = 0;
			state.courses.forEach((item) => {
				total += (item.quantity < 0 ? 0 : item.quantity) * Number(item.price);
				num += item.quantity < 0 ? 0 : item.quantity;
			});
			state.quantity = num;
			state.total = total;
		},
	},
});

export const { clearCourse, removeItem, increase, decrease, totalPrice } =
	courseSlice.actions;
export default courseSlice.reducer;
