import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";

import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  const user = true;
  const Layout = () => {
    const location = useLocation();
    const hideNavbar =
      location.pathname === "/register" || location.pathname === "/login";

    return (
      <div className="App">
        {!hideNavbar && <Navbar />}
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: user ? <Home /> : <Navigate to="/register" replace />,
        },
        {
          path: "/movies",
          element: user ? <Home type="movies" /> : <Navigate to="/register" replace />,
        },
        {
          path: "/series",
          element: user ? <Home type="series" /> : <Navigate to="/register" replace />,
        },

        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/register",
          element: !user ? <Register /> : <Navigate to="/" replace />,
        },
        {
          path: "/login",
          element: !user ? <Login /> : <Navigate to="/" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
