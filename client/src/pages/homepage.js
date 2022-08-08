import ThemeButton from "./../components/theme-button";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div>Homepage</div>

      <ThemeButton />

      <br />

      <Link to={"/posts"}>Posts</Link>
    </div>
  );
}

export default Homepage;
