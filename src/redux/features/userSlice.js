import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    user: null,
    favoritesList: [],
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem('actkn');
      } else {
        if (action.payload.token)
          localStorage.setItem('actkn', action.payload.token);
      }

      state.user = action.payload;
    },
    setFavoritesList: (state, action) => {
      state.favoritesList = action.payload;
    },
    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.favoritesList = [...state.favoritesList].filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },
    addFavorite: (state, action) => {
      state.favoritesList = [action.payload, ...state.favoritesList];
    },
  },
});

export const { setUser, setFavoritesList, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
