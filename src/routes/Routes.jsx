import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import BooksMarks from "../pages/BooksMarks";
import Content from "../components/Content";
import Author from "../components/Navbar/Author";

export const router = createBrowserRouter([
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
    path: "blog/:id",
    loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
    children: [
      {
        index: true,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        element: <Content></Content>,
      },
      {
        path: "author",
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        element: <Author></Author>,
      },
    ],
    element: <BlogDetails></BlogDetails>,
  },
  {
    path: "/bookmarks/",
    element: <BooksMarks></BooksMarks>,
  },
]);
