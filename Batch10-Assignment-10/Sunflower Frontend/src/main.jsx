import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import ThemeProvider from "./context/ThemeProvider/ThemeProvider.jsx";
import AuthProvider from "./context/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
