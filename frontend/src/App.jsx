import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "./layout/Layout";
import { CharacterInfo } from "./pages/CharacterInfo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <CharacterInfo />
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
