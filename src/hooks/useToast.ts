import { toast, ToastOptions } from "react-toastify";

const useToast = () => {
  const showSuccessToast = (message: string) => {
    const options: ToastOptions = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "border-2 border-green-500 bg-green-100 text-green-700", // Success toast with green border
    };

    toast.success(message, options);
  };

  const showErrorToast = (message: string) => {
    const options: ToastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      className: "border-2 border-red-500 bg-red-100 text-red-700", // Error toast with red border
    };

    toast.error(message, options);
  };

  const showAlertToast = (message: string) => {
    const options: ToastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      className: "border-2 border-yellow-500 bg-yellow-100 text-yellow-700", // Alert toast with yellow border
    };

    toast(message, options); // Alert toast with yellow border
  };

  return { showSuccessToast, showErrorToast, showAlertToast };
};

export default useToast;
