import { toast, ToastOptions } from "react-toastify";

const useToast = () => {
  const showSuccessToast = (message: string) => {
    const options: ToastOptions = {
      className: "!bg-[#242C32] !text-[#C8C5C5] !rounded-lg",
    };

    toast.success(message, options);
  };

  const showErrorToast = (message: string) => {
    const options: ToastOptions = {
      className: "!bg-[#242C32] !text-[#C8C5C5] !rounded-lg",
    };

    toast.error(message, options);
  };

  const showAlertToast = (message: string) => {
    const options: ToastOptions = {
      className: "!bg-[#242C32] !text-[#C8C5C5] !rounded-lg",
    };

    toast(message, options);
  };

  return { showSuccessToast, showErrorToast, showAlertToast };
};

export default useToast;
