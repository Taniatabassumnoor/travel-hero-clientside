import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserBlog from "../UserBlog/UserBlog";

const UserBlogs = () => {
  const [userblogs, setUserBlogs] = useState([]);
  useEffect(() => {
    fetch(" https://dry-bastion-02316.herokuapp.com/getuserblog")
      .then((res) => res.json())
      .then((data) => setUserBlogs(data));
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
          {userblogs?.map((userSingle) => (
            <UserBlog key={userSingle?._id} single={userSingle}></UserBlog>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UserBlogs;
