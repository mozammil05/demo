import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  gasPrice: "",
  slippage: "0.1",
  deadline: "10",
  theme: "theme-light",
  userDeadline: "10",
  lock: true,
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setGasPrice: (state, action) => {
      state.gasPrice = action.payload;
    },
    setSlippage: (state, action) => {
      state.slippage = action.payload;
    },
    setDeadline: (state, action) => {
      state.deadline = action.payload;
    },
    setThemeState: (state, action) => {
      state.theme = action.payload;
    },
    setuserDeadline: (state, action) => {
      state.userDeadline = action.payload;
    },
    setlock: (state, action) => {
      state.lock = action.payload;
    },
  },
});
export const {
  setGasPrice,
  setSlippage,
  setDeadline,
  setThemeState,
  setuserDeadline,
  setlock,
} = settingSlice.actions;

export default settingSlice.reducer;
