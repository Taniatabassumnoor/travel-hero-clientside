import React from "react";

import Blogs from "../../BlogDash/Admin/Blogs/Blogs";
import BlogHome from "../../BlogDash/BlogHome/BlogHome";

import AllReviews from "../AllReviews/AllReviews";

import HomePageBanner from "../HomePageBanner/HomePageBanner";

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <BlogHome></BlogHome>

      <AllReviews></AllReviews>
    </div>
  );
};

export default Home;
