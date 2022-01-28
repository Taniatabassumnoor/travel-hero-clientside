// import {
//   Button,
//   Input,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";

// const AddBlog = () => {
//   const [image, setImage] = useState("");
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [cost, setCost] = useState("");
//   const [date, setDate] = useState("");
//   const [location, setLocation] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!image) {
//       return;
//     }
//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("title", title);
//     formData.append("author", author);
//     formData.append("date", date);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("cost", cost);
//     formData.append("location", location);

//     fetch(" https://dry-bastion-02316.herokuapp.com/blogs", {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           setSuccess("blog added successfully");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
//   return (
//     <div>
//       <h1>Write Your Blog</h1>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Image Url"
//           multiline
//           maxRows={4}
//           onChange={(e) => setImage(e.target.value)}
//         />
//         <br />
//         {/* <Input
//           style={{ width: "50%", marginTop: "2%" }}
//           accept="image/*"
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//         />

//         <Button
//           style={{ marginLeft: "1%", marginTop: "1%" }}
//           variant="contained"
//           type="submit"
//         >
//           Add Image
//         </Button>
//         <br /> */}
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Blog Title"
//           multiline
//           maxRows={4}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Author"
//           multiline
//           maxRows={4}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <br />
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Date"
//           multiline
//           maxRows={4}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <br />
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Description"
//           multiline
//           rows={4}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br />
//         <InputLabel
//           style={{ width: "50%", marginTop: "2%" }}
//           id="demo-simple-select-label"
//         >
//           Select Category
//         </InputLabel>
//         <Select
//           style={{ width: "50%", marginTop: "2%" }}
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           label="Select Category"
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <MenuItem value="Hill Adventure">Hill Adventure</MenuItem>
//           <MenuItem value="Ocean Adventure">Ocean Adventure</MenuItem>
//           <MenuItem value="Desert Adventure">Desert Adventure</MenuItem>
//         </Select>
//         <br />
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Cost/Expense"
//           multiline
//           maxRows={4}
//           onChange={(e) => setCost(e.target.value)}
//         />
//         <br />
//         <TextField
//           style={{ width: "50%", marginTop: "2%" }}
//           label="Location/Address"
//           multiline
//           maxRows={4}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <br />
//         <Button
//           style={{ marginLeft: "1%", marginTop: "1%" }}
//           variant="contained"
//           type="submit"
//         >
//           Add Blog
//         </Button>
//       </form>
//       {success && <p style={{ color: "green" }}>{success}</p>}
//     </div>
//   );
// };

// export default AddBlog;

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const AddBlog = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  // onsubmit function
  const onSubmit = (data) => {
    axios
      .post(" https://dry-bastion-02316.herokuapp.com/blogs", data)
      .then((res) => {
        if (res.data.insertedId) {
          setSuccess("Blog added successfully");
          reset();
        }
      });
  };
  setValue("status", "pending");
  return (
    <div className="pt-5 form-design">
      <h3 className="text-white pt-5">Write Your Blog</h3>
      {/* add product form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Img-url"
          {...register("image")}
        />{" "}
        <br />
        {/* category */}
        <select
          {...register("category")}
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
        >
          <option value="Hill Adventure">Hill Adventure</option>
          <option value="Ocean Adventure">Ocean Adventure</option>
          <option value="Desert Adventure">Desert Adventure</option>
        </select>
        <br />
        {/* product title */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Blog Title"
          type="text"
          {...register("title")}
        />{" "}
        <br />
        {/*  author */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Author"
          type="text"
          {...register("author")}
        />{" "}
        <br />
        {/*  date */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Date"
          type="text"
          {...register("date")}
        />{" "}
        <br />
        {/* description */}
        <input
          style={{
            padding: "2%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Description"
          type="text"
          {...register("description")}
        />{" "}
        <br />
        {/*  date */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Cost"
          type="text"
          {...register("cost")}
        />{" "}
        <br />
        {/*  date */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Location/Address"
          type="text"
          {...register("location")}
        />{" "}
        <br />
        {/* status */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          className="d-none"
          type="text"
          {...register("status")}
        />{" "}
        <br />
        <input
          type="submit"
          className="rounded-pill btn btn-light p-3"
          value="Add service"
        />
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddBlog;
