import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";

const ManageProduct = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(" https://dry-bastion-02316.herokuapp.com/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(` https://dry-bastion-02316.herokuapp.com/blogs/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("product deleted");
            const restData = blogs.filter((order) => order._id !== id);
            setBlogs(restData);
          }
        });
    }
  };
  return (
    <Container>
      <h2>All products</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Blog Title</TableCell>
              <TableCell align="center">Blog Image</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="center">
                  <img
                    style={{ width: 50, height: 50 }}
                    src={product.image}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">{product.date}</TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleDelete(product._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Delete Product{" "}
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageProduct;
