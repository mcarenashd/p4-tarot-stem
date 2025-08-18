import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CardDetailPage from "../pages/CardDetailPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/CardDetailPage/:id",
        element: <CardDetailPage />,
      },
    ],
  },
]);
export default Router