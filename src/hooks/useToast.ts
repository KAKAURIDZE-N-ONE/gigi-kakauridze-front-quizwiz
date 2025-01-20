import { toast, ToastOptions } from "react-toastify";

const useToast = () => {
  const showSuccessToast = (message: string) => {
    const options: ToastOptions = {
      className: "border-2 border-green-500 bg-green-100 text-green-700",
    };

    toast.success(message, options);
  };

  const showErrorToast = (message: string) => {
    const options: ToastOptions = {
      className: "border-2 border-red-500 bg-red-100 text-red-700",
    };

    toast.error(message, options);
  };

  const showAlertToast = (message: string) => {
    const options: ToastOptions = {
      className: "border-2 border-yellow-500 bg-yellow-100 text-yellow-700",
    };

    toast(message, options);
  };

  return { showSuccessToast, showErrorToast, showAlertToast };
};

export default useToast;
