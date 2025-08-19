import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/Home";
import CardDetailPage from "../pages/CardDetailPage";
import CardReading from "../pages/CardReading.jsx";

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
            {
        path: "/reading",
        element: <CardReading />,
      },
    ],
  },
]);
export default router