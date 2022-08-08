import { useEffect, useState } from "react";
import "./../App.css";
import Api from "./../database";
import Post from "./../components/post";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchData = async () => {
      let posts = await Api.get("/posts");
      setPosts(posts);
      let categories = await Api.get("/categories");
      setCategories(categories);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await Api.post("/posts/save", formData);
    setPosts(response);
    setFormData({ title: "", description: "" });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async (id) => {
    const response = await Api.delete("/posts/delete", id);
    setPosts(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"title"}
          onChange={handleChange}
          value={formData.title}
          name={"title"}
        />
        <input
          type="text"
          placeholder={"description"}
          onChange={handleChange}
          value={formData.description}
          name={"description"}
        />

        <select onChange={handleChange} name={"category_id"}>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category._id}>
                {category.name}
              </option>
            );
          })}
        </select>

        <button type={"submit"}>Odeslat</button>
      </form>
      <div>
        homepage:
        <Link to={"/"}>Homepage</Link>
      </div>

      {posts.map((post, i) => {
        return <Post key={i} post={post} removePost={handleDelete} />;
      })}
    </div>
  );
}

export default Posts;
