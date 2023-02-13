import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const Toast = () => {
  return (
    <div>
      <ToastContainer
        autoClose={1400}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};