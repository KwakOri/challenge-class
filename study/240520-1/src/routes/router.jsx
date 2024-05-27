import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/layout";
import { About, Blog, Contact, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <div>Blog Detail</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>페이지를 찾을 수 없습니다</div>,
  },
]);

export { router };
