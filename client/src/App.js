import { useEffect, useState } from "react";
import "./App.css";
import { isExpired as jwtTokenIsExpired } from "./utils/jwt-parser";
import Login from "./pages/login";
import { routesList } from "./routes.js";

import { useRoutes } from "react-router-dom";

function App() {
  const routeElement = useRoutes(routesList);
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token, routeElement]);

  if (jwtTokenIsExpired(token)) {
    return <Login />;
  }

  return <div className="App">{routeElement}</div>;
}

export default App;
