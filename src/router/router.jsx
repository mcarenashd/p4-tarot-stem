import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import CardsPage from "../pages/CardsPage.jsx";
import CardDetailPage from "../pages/CardDetailPage";
import CardReading from "../pages/CardReading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardsPage />,
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