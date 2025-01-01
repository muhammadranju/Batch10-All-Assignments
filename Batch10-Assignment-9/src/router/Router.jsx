import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "../layout/PrivateRoutes/PrivateRoutes";
import Root from "../layout/Root/Root";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Tutorials from "../pages/Tutorials/Tutorials";
import StartLearning from "../pages/StartLearning/StartLearning";
import Lessons from "../pages/Lessons/Lessons";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import ResetPassword from "../pages/Auth/ResetPassword";
import NotFound from "../pages/NotFound/NotFound";
import PublicRoutes from "../layout/PublicRoutes/PublicRoutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <PublicRoutes>
            <Login />,
          </PublicRoutes>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRoutes>
            <Register />,
          </PublicRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile-update",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },

      {
        path: "tutorials",
        element: (
          <PrivateRoutes>
            <Tutorials />
          </PrivateRoutes>
        ),
      },
      {
        path: "start-learning",
        element: <StartLearning />,
        loader: async () => {
          const res = await fetch(`/data/categories.json`);
          const data = await res.json();
          return { data };
        },
      },

      {
        path: "lessons/:id",
        element: (
          <PrivateRoutes>
            <Lessons />,
          </PrivateRoutes>
        ),

        loader: async ({ params }) => {
          const rsc = await fetch(`/data/languages.json`);
          const data = await rsc.json();
          const filterData = data.filter(
            (item) => item.lesson_no == parseInt(params.id)
          );
          return { filterData };
        },
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default Router;
