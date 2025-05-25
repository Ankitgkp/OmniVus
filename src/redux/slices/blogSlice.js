import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = blogSlice.actions;
export default blogSlice.reducer;
