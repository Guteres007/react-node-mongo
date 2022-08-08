import { useEffect, useState } from "react";
import "./App.css";
import Api from "./database";
import { isExpired as jwtTokenIsExpired } from "./utils/jwt-parser";
import Login from "./pages/login";
import Posts from "./pages/posts.js";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let posts = await Api.get("/posts");
      setPosts(posts);
      let categories = await Api.get("/categories");
      setCategories(categories);
    };
    fetchData();
  }, []);

  const token = localStorage.getItem("token");
  if (jwtTokenIsExpired(token)) {
    return <Login />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
