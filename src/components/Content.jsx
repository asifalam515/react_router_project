import React from "react";
import { useLoaderData } from "react-router-dom";

const Content = () => {
  const blog = useLoaderData();
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
    user,
  } = blog;
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={cover_image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {title}
            </a>
            <p className="text-xs dark:text-gray-600">
              By
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                {user.name}
              </a>
            </p>
          </div>
          <div className="dark:text-gray-800">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
