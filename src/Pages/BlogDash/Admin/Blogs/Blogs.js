import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(` https://dry-bastion-02316.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, mb: 15 }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 600,
            m: "5%",
            color: "salmon",
            textAlign: "center",
          }}
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
