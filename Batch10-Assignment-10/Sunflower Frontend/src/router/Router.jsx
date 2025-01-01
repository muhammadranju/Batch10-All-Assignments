import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import PrivateRoutes from "../layout/PrivateRoutes/PrivateRouter";
import All_Visas from "../pages/All_Visas/All_Visas";
import VisasDetails from "../pages/VisasDetails/VisasDetails";
import MyAddedVisas from "../pages/MyAddedVisas/MyAddedVisas";
import AddVisa from "../pages/AddVisa/AddVisa";
import VisaDetails from "../pages/VisasDetails/VisasDetails";
import MyVisaApplications from "../pages/MyVisaApplications/MyVisaApplications";

const router = createBrowserRouter([
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
        path: "/all-visas",
        element: <All_Visas />,
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoutes>
            <AddVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateRoutes>
            <MyAddedVisas />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-visas-applications",
        element: (
          <PrivateRoutes>
            <MyVisaApplications />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/visas-details/:visaID",
        element: (
          <PrivateRoutes>
            <VisaDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
