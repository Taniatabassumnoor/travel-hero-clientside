// import React from "react";
// import axios from "axios";
// import "./ProductDetails.css";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useHistory, useLocation, useParams } from "react-router";
// import { Card, Col, Row, Spinner } from "react-bootstrap";
// import useAuth from "../../../../Hooks/useAuth";

// const UserPostedBlog = () => {
//     const [users, setUsers] = useState([]);
//     const [isupdated, setIsUpdated] = useState(false);
//     const { register, handleSubmit, setValue } = useForm();
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_uri = location?.state?.from || "/";
//   return (
//     <div>
//       <form onSubmit={handleBlogSubmit}>
//         <TextField
//           id="outlined-size-small"
//           name="customerName"
//           onBlur={handleOnBlur}
//           defaultValue={user.displayName}
//           size="small"
//           sx={{ width: "90%", m: 1 }}
//         />
//         <TextField
//           id="outlined-size-small"
//           name="title"
//           placeholder="Blog Title"
//           onBlur={handleOnBlur}
//           size="small"
//           sx={{ width: "90%", m: 1 }}
//         />
//         <TextField
//           id="outlined-size-small"
//           name="location"
//           onBlur={handleOnBlur}
//           placeholder="Address/location"
//           size="small"
//           sx={{ width: "90%", m: 1 }}
//         />
//         <TextField
//           id="outlined-size-small"
//           name="cost"
//           onBlur={handleOnBlur}
//           placeholder="Expense"
//           size="small"
//           sx={{ width: "90%", m: 1 }}
//         />
//         <br />
//         <Button sx={{ textAlign: "center" }} type="submit" variant="contained">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default UserPostedBlog;
