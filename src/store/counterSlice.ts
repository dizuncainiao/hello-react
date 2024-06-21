import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    subtract: (state) => {
      state.count -= 1;
    },
    addNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { add, addNumber, subtract } = counterSlice.actions;

export const addAsync = (amount: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(addNumber(amount));
    }, 1000);
  };
};

export const selectCountState = (state: any) => state.counter.count;

export default counterSlice.reducer;
