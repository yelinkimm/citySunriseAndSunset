import { createBrowserRouter } from "react-router-dom";
import Cities from "./routes/Cities";
import City from "./routes/City";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Cities/>
      },
      {
        path: "/:cityId",
        element: <City/>
      }
    ]
  }
]);

export default router;