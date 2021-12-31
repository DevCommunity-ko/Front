import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state, action) {
      action.payload = true;
    },
    finishLoading(state, action) {
      action.payload = false;
    },
  },
});

const { reducer, actions } = loadingSlice;
export const { startLoading, finishLoading } = actions;
export default reducer;
