import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import BooksMarks from "./pages/BooksMarks.jsx";
import MainLayOut from "./layouts/MainLayOut.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
  },
  {
    path: "/blogs/",
    loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
    element: <Blogs></Blogs>,
  },
  {
    path: "/bookmarks/",
    element: <BooksMarks></BooksMarks>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
