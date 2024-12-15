import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modalIsOpen: boolean;
  mobileSignInIsOpen: boolean;
  modalOpacity: number;
  mobileSignUpIsOpen: boolean;
}

const initialState: ModalState = {
  modalIsOpen: false,
  mobileSignInIsOpen: false,
  mobileSignUpIsOpen: false,
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
  },
});

export const {
  updateModalIsOpen,
  updateModalOpacity,
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
} = modalSlice.actions;

export const getModalIsOpen = (state: { modal: ModalState }) =>
  state.modal.modalIsOpen;

export const getMobileSignInIsOpen = (state: { modal: ModalState }) =>
  state.modal.mobileSignInIsOpen;

export const getMobileSignUpIsOpen = (state: { modal: ModalState }) =>
  state.modal.mobileSignUpIsOpen;

export const getModalOpacity = (state: { modal: ModalState }) =>
  state.modal.modalOpacity;

export default modalSlice.reducer;
