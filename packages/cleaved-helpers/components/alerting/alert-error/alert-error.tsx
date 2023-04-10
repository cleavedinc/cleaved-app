import { toast } from "react-toastify";

export const alertError = (message: string): void => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
  });
};
