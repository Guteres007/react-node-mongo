import { useEffect, useState } from "react";
import "./App.css";
import Api from "./database";
import Post from "./components/post";
import ThemeButton from "./components/themeButton";

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchData = async () => {
      let response = await Api.get("/posts");
      setPosts(response);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await Api.post("/post/save", formData);
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
    const response = await Api.destroy("/post/delete", id);
    setPosts(response);
  };

  return (
    <div className="App">
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
          <button type={"submit"}>Odeslat</button>
        </form>
      </div>

      <ThemeButton />
      <br />
      <div>
        {posts.map((post, i) => {
          return <Post key={i} post={post} removePost={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export default App;
