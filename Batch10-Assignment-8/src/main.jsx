import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./router/MainRouter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MainRouter} />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      pauseOnFocusLoss
    />
    <ToastContainer />
  </StrictMode>
);
