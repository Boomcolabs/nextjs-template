import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRole } from "@/lib/api/app/user";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  role: UserRole | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserAction: (state, payload) => {
      state.isAuthenticated = true;
      state.user = JSON.stringify(payload.payload);
      localStorage.setItem("user", JSON.stringify(payload.payload));
    },
    logoutUserAction: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserRoleAction: (state, payload: PayloadAction<UserRole | null>) => {
      state.role = payload.payload;
    },
  },
});

export const { loginUserAction, logoutUserAction, setUserRoleAction } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
