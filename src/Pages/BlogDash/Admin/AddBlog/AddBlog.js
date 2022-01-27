import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const AddBlog = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("cost", cost);
    formData.append("location", location);

    fetch("http://localhost:5000/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("blog added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h1>Write Your Blog</h1>
      <form onSubmit={handleSubmit}>
        <Input
          style={{ width: "50%", marginTop: "2%" }}
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <Button
          style={{ marginLeft: "1%", marginTop: "1%" }}
          variant="contained"
          type="submit"
        >
          Add Image
        </Button>
        <br />
        <TextField
          style={{ width: "50%", marginTop: "2%" }}
          label="Blog Title"
          multiline
          maxRows={4}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "50%", marginTop: "2%" }}
          label="Author"
          multiline
          maxRows={4}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "50%", marginTop: "2%" }}
          label="Date"
          multiline
          maxRows={4}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "50%", marginTop: "2%" }}
          label="Description"
          multiline
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <InputLabel
          style={{ width: "50%", marginTop: "2%" }}
          id="demo-simple-select-label"
        >
          Select Category
        </InputLabel>
        <Select
          style={{ width: "50%", marginTop: "2%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Hill Adventure">Hill Adventure</MenuItem>
          <MenuItem value="Ocean Adventure">Ocean Adventure</MenuItem>
          <MenuItem value="Desert Adventure">Desert Adventure</MenuItem>
        </Select>
        <br />
        <TextField
          style={{ width: "50%", marginTop: "2%" }}
          label="Cost/Expense"
          multiline
          maxRows={4}
          onChange={(e) => setCost(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "50%", marginTop: "2%" }}
          label="Location/Address"
          multiline
          maxRows={4}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <Button
          style={{ marginLeft: "1%", marginTop: "1%" }}
          variant="contained"
          type="submit"
        >
          Add Blog
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddBlog;
