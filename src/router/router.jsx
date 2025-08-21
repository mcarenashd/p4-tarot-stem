import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import CardsPage from "../pages/CardsPage.jsx";
import CardDetail from "../pages/CardDetail";
import CardReading from "../pages/CardReading.jsx";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/CardsPage",
        element: <CardsPage />,
      },
      {
        path: "/card/:id",
        element: <CardDetail/>,
      },
            {
        path: "/reading",
        element: <CardReading />,
      },
         {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router