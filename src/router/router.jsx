import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/Home";
import CardDetailPage from "../pages/CardDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/card/:id",
        element: <CardDetailPage />,
      },
    ],
  },
]);
export default router