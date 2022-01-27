import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Roll } from "react-reveal";
import { NavLink } from "react-router-dom";

const Blog = ({ single }) => {
  const { title, cost, image, location } = single;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Roll left>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
          <CardMedia
            component="img"
            style={{ width: "100%", height: "350px", margin: "0 auto" }}
            image={`data:image/jpeg;base64,${image}`}
            alt=""
          />
          <CardContent sx={{ p: 3 }}>
            <Typography sx={{ p: 1 }} variant="h5" component="div">
              Title: {title}
            </Typography>
            <Typography
              sx={{ p: 1, color: "gray", fontSize: "17px" }}
              variant="h6"
              component="div"
            >
              Cost: {cost}
            </Typography>
            <Typography sx={{ p: 1 }} variant="h6" component="div">
              Price: $ {location}
            </Typography>
            <NavLink
              style={{ textDecoration: "none" }}
              to={`/blogs/${single._id}`}
            >
              <Button style={{ backgroundColor: "#000" }} variant="contained">
                Read Details
              </Button>
            </NavLink>
          </CardContent>
        </Card>
      </Roll>
    </Grid>
  );
};

export default Blog;
