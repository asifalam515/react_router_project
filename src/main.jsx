import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import BooksMarks from "./pages/BooksMarks.jsx";
import MainLayOut from "./layouts/MainLayOut.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import { router } from "./routes/Routes.jsx";
import toast, { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </StrictMode>
);
