import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserBlogDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(` https://dry-bastion-02316.herokuapp.com/userblogs/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <Container>
        <div>
          <img
            style={{ widch: "400px", height: "600px", objectFit: "cover" }}
            src={details?.image}
            alt=""
          />
        </div>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Title: {details?.title}
        </Typography>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Author Name: {details?.author}
        </Typography>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Date: {details?.date}
        </Typography>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Description: <br /> {details?.description}
        </Typography>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Category: <br /> {details?.category}
        </Typography>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Location: <br /> {details?.location}
        </Typography>
        <Typography sx={{ p: 1 }} variant="h5" component="div">
          Cost: <br /> {details?.cost}
        </Typography>
      </Container>
    </div>
  );
};

export default UserBlogDetails;
