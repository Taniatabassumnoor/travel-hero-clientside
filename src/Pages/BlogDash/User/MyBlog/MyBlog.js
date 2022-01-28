// import React, { useEffect, useState } from "react";
// import useAuth from "../../../../Hooks/useAuth";

// const MyBlog = () => {
//   const { user, isLoading } = useAuth();
//   const [myBlog, setMyBlog] = useState([]);
//   useEffect(() => {
//     const url = ` https://dry-bastion-02316.herokuapp.com/userblogs?email=${user.email}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setMyBlog(data));
//   }, [user.email]);
//   return <div></div>;
// };

// export default MyBlog;
