import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import PrivateRoutes from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "artifacts",
        element: <AllArtifacts />,
      },
      {
        path: "add-artifact",
        element: (
          <PrivateRoutes>
            <AddArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-artifacts",
        element: (
          <PrivateRoutes>
            <MyArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "liked-artifacts",
        element: (
          <PrivateRoutes>
            <LikedArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "artifact/:id",
        element: (
          <PrivateRoutes>
            <ArtifactDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
