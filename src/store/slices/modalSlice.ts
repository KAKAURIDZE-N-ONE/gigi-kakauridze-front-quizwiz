import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modalIsOpen: boolean;
  mobileSignInIsOpen: boolean;
  mobileSignUpIsOpen: boolean;
  mobileForgotPasswordIsOpen: boolean;
  mobileResetPasswordIsOpen: boolean;
  modalOpacity: number;
}

const initialState: ModalState = {
  modalIsOpen: false,
  mobileSignInIsOpen: false,
  mobileSignUpIsOpen: false,
  mobileForgotPasswordIsOpen: false,
  mobileResetPasswordIsOpen: false,
  modalOpacity: 100,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateModalIsOpen(state, action: PayloadAction<boolean>) {
      state.modalIsOpen = action.payload;
    },
    updateMobileSignInIsOpen(state, action: PayloadAction<boolean>) {
      state.mobileSignInIsOpen = action.payload;
    },
    updateMobileSignUpIsOpen(state, action: PayloadAction<boolean>) {
      state.mobileSignUpIsOpen = action.payload;
    },
    updateModalOpacity(state, action: PayloadAction<number>) {
      state.modalOpacity = action.payload;
    },
    updateMobileForgotPasswordIsOpen(state, action) {
      state.mobileForgotPasswordIsOpen = action.payload;
    },
    updateMobileResetPasswordIsOpen(state, action) {
      state.mobileResetPasswordIsOpen = action.payload;
    },
  },
});

export const {
  updateModalIsOpen,
  updateModalOpacity,
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateMobileForgotPasswordIsOpen,
  updateMobileResetPasswordIsOpen,
} = modalSlice.actions;

export const getModalIsOpen = (state: { modal: ModalState }) =>
  state.modal.modalIsOpen;

export const getMobileSignInIsOpen = (state: { modal: ModalState }) =>
  state.modal.mobileSignInIsOpen;

export const getMobileSignUpIsOpen = (state: { modal: ModalState }) =>
  state.modal.mobileSignUpIsOpen;

export const getMobileForgotPasswordIsOpen = (state: { modal: ModalState }) =>
  state.modal.mobileForgotPasswordIsOpen;

export const getMobileResetPasswordIsOpen = (state: { modal: ModalState }) =>
  state.modal.mobileResetPasswordIsOpen;

export const getModalOpacity = (state: { modal: ModalState }) =>
  state.modal.modalOpacity;

export default modalSlice.reducer;
