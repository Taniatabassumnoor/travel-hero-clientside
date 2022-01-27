import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Roll } from "react-reveal";
import { NavLink } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1, mt: 25, mb: 15 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 600, m: "5%", color: "#000" }}
          variant="h4"
          component="div"
        >
          Blogs
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {blogs?.map((single) => (
            <Blog key={single?._id} single={single}></Blog>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
