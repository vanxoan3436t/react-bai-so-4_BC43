import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  maSV: '',
  sdt: '',
  hoTen: '',
  email: ''
}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer',
  initialState,
  reducers: {
    changeInfo: (state, action) => {
      let { id, value } = action.payload;
      state[id] = value;
    }
  }
});

export const { changeInfo} = sinhVienReducer.actions

export default sinhVienReducer.reducer