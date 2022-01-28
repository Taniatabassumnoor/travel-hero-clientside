// import { Container } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button } from "@mui/material";
// import { Box } from "@mui/system";
// import useAuth from "../../../Hooks/useAuth";

// const ManageAllOrder = () => {
//   const [allOrders, setAllOrders] = useState([]);
//   const [isReload, setIsReload] = useState(false);
//   const { user } = useAuth();

//   useEffect(() => {
//     axios
//       .get(` https://dry-bastion-02316.herokuapp.com/allorders`)
//       .then((res) => setAllOrders(res.data));
//   }, [isReload]);

//   const handleStatus = (data) => {
//     data.status = "Shipped";
//     const url = ` https://dry-bastion-02316.herokuapp.com/orders/${data._id}`;
//     axios
//       .put(url, data)
//       .then((res) => console.log("Updating order ", res.data))
//       .finally(() => setIsReload(true));
//   };

//   const handleDelete = (id) => {
//     const proceed = window.confirm("Are you sure, you want to delete?");
//     if (proceed) {
//       axios.delete(` https://dry-bastion-02316.herokuapp.com/orders/${id}`).then((res) => {
//         if (res.data.deletedCount > 0) {
//           alert("product deleted");
//           const restData = allOrders.filter((order) => order._id !== id);
//           setAllOrders(restData);
//         }
//       });
//     }
//   };

//   return (
//     <Container>
//       <h2>All Orders</h2>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Product Name</TableCell>
//               <TableCell align="center">Price</TableCell>
//               <TableCell align="center">Ordered By</TableCell>
//               <TableCell align="center">Status</TableCell>
//               <TableCell align="center">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {allOrders.map((order) => (
//               <TableRow
//                 key={order.name}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {order.name}
//                 </TableCell>
//                 <TableCell align="center">{order.price}</TableCell>
//                 <TableCell align="center">
//                   {order?.orderInfo?.customerName}
//                 </TableCell>
//                 {order.status === "Pending" ? (
//                   <TableCell
//                     sx={{
//                       bgcolor: "warning.main",
//                       fontWeight: "bold",
//                       color: "white",
//                       fontSize: 16,
//                     }}
//                     align="center"
//                   >
//                     {order.status}
//                   </TableCell>
//                 ) : (
//                   <TableCell
//                     sx={{
//                       bgcolor: "success.main",
//                       fontWeight: "bold",
//                       color: "white",
//                       fontSize: 16,
//                     }}
//                     align="center"
//                   >
//                     {order.status}
//                   </TableCell>
//                 )}
//                 <TableCell align="center">
//                   <Button
//                     onClick={() => handleStatus(order)}
//                     sx={{ bgcolor: "success.main" }}
//                     variant="contained"
//                   >
//                     Approve
//                   </Button>{" "}
//                   <Button
//                     onClick={() => handleDelete(order._id)}
//                     sx={{ bgcolor: "error.main" }}
//                     variant="contained"
//                   >
//                     {" "}
//                     Delete{" "}
//                   </Button>{" "}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default ManageAllOrder;
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageAllOrder = () => {
  const [allBlogPost, setAllBlogPost] = useState([]);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    axios
      .get(` https://dry-bastion-02316.herokuapp.com/getuserblog`)
      .then((res) => setAllBlogPost(res.data));
  }, [isReload]);
  const handleStatus = (data) => {
    data.status = "Approved";
    const url = ` https://dry-bastion-02316.herokuapp.com/userblogs/${data._id}`;
    axios
      .put(url, data)
      .then((res) => console.log("Updating order ", res.data))
      .finally(() => setIsReload(true));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(` https://dry-bastion-02316.herokuapp.com/userblogs/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("product deleted");
            const restData = allBlogPost.filter((order) => order._id !== id);
            setAllBlogPost(restData);
          }
        });
    }
  };
  return (
    <Container>
      <h2>All Orders</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Blog Title</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Author By</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBlogPost.map((order) => (
              <TableRow
                key={order?.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.title}
                </TableCell>
                <TableCell align="center">{order.date}</TableCell>
                <TableCell align="center">{order.author}</TableCell>

                {order.status === "Pending" ? (
                  <TableCell
                    sx={{
                      bgcolor: "warning.main",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 16,
                    }}
                    align="center"
                  >
                    {order.status}
                  </TableCell>
                ) : (
                  <TableCell
                    sx={{
                      bgcolor: "success.main",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 16,
                    }}
                    align="center"
                  >
                    {order.status}
                  </TableCell>
                )}
                <TableCell align="center">
                  <Button
                    onClick={() => handleStatus(order)}
                    sx={{ bgcolor: "success.main" }}
                    variant="contained"
                  >
                    Approve
                  </Button>{" "}
                  <Button
                    onClick={() => handleDelete(order._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Delete{" "}
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

export default ManageAllOrder;
