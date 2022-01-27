import React from "react";

import Blogs from "../../BlogDash/Admin/Blogs/Blogs";

import Footer from "../../Shared/Footer/Footer";
import AllReviews from "../AllReviews/AllReviews";

import Category from "../Category/Category";
import HomePageBanner from "../HomePageBanner/HomePageBanner";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <div className="sidebar-container">
        <p>
          <a href="#">Budget</a>
        </p>
        <p>
          <a href="#">Foods</a>
        </p>
        <p>
          <a href="#">Camera</a>
        </p>
      </div>
      {/* <UserBlogs></UserBlogs> */}
      <Blogs></Blogs>

      <AllReviews></AllReviews>
    </div>
  );
};

export default Home;
