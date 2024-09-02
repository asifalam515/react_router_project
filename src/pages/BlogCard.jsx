import React from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../../src/assets/404.jpg";

const BlogCard = ({ blog }) => {
  const {
    type_of,
    title,
    description,
    comments_count,
    cover_image,
    tag_list,
    id,
    published_timestamp,
  } = blog;
  return (
    <div>
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className=" transition border-2 hover:scale-105 border-primary hover:border-secondary max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {published_timestamp}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
