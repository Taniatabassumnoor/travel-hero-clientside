import { Grid } from "@mui/material";
import React from "react";
import SideBar from "../../SideBar/SideBar";
import Blogs from "../Admin/Blogs/Blogs";

const BlogHome = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <SideBar></SideBar>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Blogs></Blogs>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogHome;
