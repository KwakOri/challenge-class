import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Mock Data
const mockList = Array.from({ length: 12 }, (_, i) => {
  return {
    _id: uuidv4(),
    date: new Date().getTime() - 3000000 * (i + 1),
    content:
      "Nulla eiusmod ut aute anim ut velit velit. Aliqua ea magna ut et pariatur magna sit exercitation mollit ipsum labore laborum et non. Officia duis nostrud sint laboris id cupidatat consequat laboris adipisicing duis. Mollit ad esse amet in excepteur reprehenderit culpa. Exercitation sunt labore mollit cillum excepteur tempor adipisicing. Veniam veniam consequat deserunt ut cupidatat aute et irure ex tempor velit deserunt tempor. Ex proident quis aliqua esse enim elit labore magna in labore ad est id.",
  };
}).sort((a, b) => b.date - a.date);

// const getDefaultId = () => ;

// Memo에 관련된 State를 저장
const memoSlice = createSlice({
  name: "memoSlice",
  initialState: {
    memoList: mockList,
    currMemoId: mockList[0]._id,
  },
  reducers: {
    setMemoId: (state, action) => {
      state.currMemoId = action.payload;
    },
    updateMemo: (state, action) => {
      const { id, content } = action.payload;
      state.memoList.find((item) => item._id === id).content = content;
    },
    addMemo: (state) => {
      state.memoList.push({
        _id: uuidv4(),
        date: new Date().getTime(),
        content: "Untitled",
      });
      state.memoList.sort((a, b) => b.date - a.date);
      state.currMemoId = state.memoList[0]._id;
    },
    deleteMemo: (state, action) => {
      state.memoList = state.memoList.filter(
        (item) => item._id !== action.payload
      );
      state.currMemoId = state.memoList[0]._id;
    },
  },
});

export { memoSlice };
export const { addMemo, deleteMemo, updateMemo, setMemoId } = memoSlice.actions;
