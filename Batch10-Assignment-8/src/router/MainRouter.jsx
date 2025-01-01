import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/Root/MainRoot";
import Home from "../pages/Home/Home";
import Category from "../layout/Categories/Category";
import Product from "../pages/Product/Product";
import Dashboard from "../pages/Dashboard/Dashboard";
import Wishlist from "../pages/Wishlist/Wishlist";
import Statistics from "../pages/Statistics/Statistics";
import CartPage from "../pages/Cart/CartPage";
import ErrorPage from "../layout/Error/ErrorPage";
import History from "../pages/History/History";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../data/categories.json"),
        children: [
          {
            path: "/category/:categoryId",
            element: <Category />,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <div>Products</div>,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },

      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

export default MainRouter;
