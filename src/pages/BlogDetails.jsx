import React, { useState } from "react";
import { IoBookmarkSharp } from "react-icons/io5";

import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Loader from "../components/Loader";
import { saveBlog } from "../utils";

const BlogDetails = () => {
  const blog = useLoaderData();

  const navigation = useNavigation();
  const [tabIndex, setTabIndex] = useState(0);
  const {
    title,
    id,
    description,
    cover_image,
    comments_count,
    published_timestamp,
    social_image,
    reading_time_minutes,
    tag_list,
  } = blog;
  const tagList = [tag_list];
  if (navigation.state === "loading") return <Loader></Loader>;

  const handleBookMarks = (blog) => {
    const simplifiedBlog = {
      id: blog.id,
      title: blog.title,
      description: blog.description,
      cover_image: blog.cover_image,
      published_timestamp: blog.published_timestamp,
      reading_time_minutes: blog.reading_time_minutes,
    };
    saveBlog(simplifiedBlog);
  };
  return (
    <div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <img
                  src={cover_image}
                  alt=""
                  className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                />
                <p className="text-sm"> {published_timestamp}</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {reading_time_minutes}
              </p>
            </div>
          </div>
          {/* tabs */}
          <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content </span>
            </Link>

            <Link
              onClick={() => setTabIndex(1)}
              to={`author`}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            {/* bookmarks button */}
            <button
              className="btn p-3 ml-5 rounded-md hover:bg-opacity-30 bg-opacity-20 cursor-pointer "
              onClick={handleBookMarks}
            >
              <IoBookmarkSharp size={20} />{" "}
            </button>
          </div>

          <div>
            <Outlet></Outlet>
          </div>
          <div className="dark:text-gray-800">
            <p> {description} </p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
            {tagList.map((tag, idx) => (
              <div key={idx}>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
                >
                  {tag}
                </a>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>

            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
