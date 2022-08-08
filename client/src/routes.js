import Posts from "./pages/posts.js";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
export const routesList = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
];
