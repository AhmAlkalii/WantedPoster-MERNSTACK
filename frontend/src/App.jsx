import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "./layout/Layout";
import { CharacterInfo } from "./pages/CharacterInfo";
import { Characterform } from "./components/Characterform";


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
      },
      {
        path: "New-Character",
        element: <Characterform />
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
