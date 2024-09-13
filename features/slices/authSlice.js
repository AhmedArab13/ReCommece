import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("authUser")) || {
    email: "",
    password: "",
    isLoggedIn: false,
  },

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
      // !userValidation || !passwordValidation
      if (false) {
        state.isLoggedIn = false;
        alert("Invalid User Name or Password");
      } else {

        const saveState = {
          ...action.payload,
          isLoggedIn: true,
        };
        state.user = saveState;
     
        sessionStorage.setItem("authUser", JSON.stringify(saveState));
      }
    },

    logout: (state) => {
      state.user = {
        email: "",
        password: "",
        isLoggedIn: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
