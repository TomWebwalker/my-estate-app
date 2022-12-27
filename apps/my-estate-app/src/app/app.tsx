// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Auth} from "@my-estate-app/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/auth',
    element: <Auth/>
  }
]);

export function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
