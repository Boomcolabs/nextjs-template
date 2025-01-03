import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from '@/types/profile';

interface UserState {
  profile: UserProfile | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, payload) => {
      state.profile = payload.payload;
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export const userReducer = userSlice.reducer;
