import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
  initialState: { mode: 'light' }, // Thème par défaut
    reducers: {
    toggleTheme: (state) => {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
    }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
