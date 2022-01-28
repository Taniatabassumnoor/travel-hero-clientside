import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const UserAddBlog = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  // onsubmit function
  const onSubmit = (data) => {
    data.status = "pending";
    axios
      .post(" https://dry-bastion-02316.herokuapp.com/userblogs", data)
      .then((res) => {
        if (res.data.insertedId) {
          setSuccess("Blog added successfully");
          reset();
        }
      });
  };
  // setValue("status", "pending");
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
        {/* <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          className="d-none"
          type="text"
          {...register("status")}
        />{" "} */}
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

export default UserAddBlog;
