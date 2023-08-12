import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import emailService from "./EmailService";

const initialState = {
    sendingEmail: false,
    emailSent: false,
    msg: ""
};

//send Authomated email
export const sendAuthomatedEmail = createAsyncThunk(
    "email/sendAuthomatedEmail",
    async (userData, thunkAPI) => {
      try {
        return await emailService.sendAuthomatedEmail(userData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


const EmailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    EMAIL_RESET(state) {
        state.sendingEmail = false;
        state.emailSent = false;
        state.msg = ""
    }
  },

  extraReducers: (builder) => {
    builder
         //Send Authomated Email
      .addCase(sendAuthomatedEmail.pending, (state) => {
        state.sendingEmail = true;
      })
      .addCase(sendAuthomatedEmail.fulfilled, (state, action) => {
        state.sendingEmail = true;
        state.emailSent = true;
        state.msg = action.payload;
        toast.success(action.payload)
      })
      .addCase(sendAuthomatedEmail.rejected, (state, action) => {
        state.sendingEmail = false;
        state.emailSent = false;
        state.msg = action.payload;
        toast.success(action.payload)
      })

  }
});

export const {EMAIL_RESET} = EmailSlice.actions

export default EmailSlice.reducer

