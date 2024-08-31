import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-center m-2">
      <h1 className="text-5xl p-10">
        Welcome to{" "}
        <span className=" bg-gradient-to-r bg-300%  from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
          ByteBlaze
        </span>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit velit
        accusamus amet laborum soluta temporibus minima debitis quaerat saepe
        assumenda!
      </p>
      <div>
        <Link to="/blogs" className="btn btn-accent mx-2">
          Read Blogs
        </Link>
        <Link to="/bookmarks" className="btn btn-primary ">
          BookMarks
        </Link>
      </div>
    </div>
  );
};

export default Banner;
