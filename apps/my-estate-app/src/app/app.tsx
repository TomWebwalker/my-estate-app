// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import {Auth} from "@my-estate-app/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world! <Link to='auth'>Auth</Link></div>,
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
