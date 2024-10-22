import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : [];
  } catch (e) {
    console.error("Error loading from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
};

//  fetch all users
export const getAllUsers = createAsyncThunk("auth/getAllUsers", async () => {
  const users = loadFromLocalStorage("users");
  return users;
});

// Check user credentials
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch, getState, rejectWithValue }) => {
    // Load all users from localStorage before login
    await dispatch(getAllUsers());

    const { users } = getState().auth;
    const foundUser = users.find(
      (u) => u.email === userData.email && u.password === userData.password
    );

    if (!foundUser) {
      return rejectWithValue("User not found or incorrect credentials");
    }

    saveToLocalStorage("user", userData);
    return foundUser;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    // Register new user
    registerUser: (state, action) => {
      // Check if the user already exists
      const existingUser = state.users.find(
        (user) => user.email === action.payload.email
      );

      if (existingUser) {
        state.error = "User with this email already exists";
        return;
      }

      // Add the new user
      const updatedUsers = [...state.users, action.payload];
      state.users = updatedUsers;
      saveToLocalStorage("users", updatedUsers);

      // Optional: Automatically log the user in after registration
      state.user = action.payload;
      state.isAuthenticated = true;
      saveToLocalStorage("user", action.payload);
    },

    // Logout user
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // Clear the user data from localStorage on logout
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle getAllUsers thunk
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle login thunk
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { registerUser, logout } = authSlice.actions;
export default authSlice.reducer;
