import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { HomePage } from "../pages/HomePage";
import { PostDetailPage } from "../pages/PostDetailPage";
import postsDetailPageLoader from "../pages/PostDetailPage/postsDetailPage.loader";
import { PostsListPage } from "../pages/PostsListPage";
import postsListPageLoader from "../pages/PostsListPage/postsListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postsListPageLoader,
      },
      {
        path: "posts/:postId",
        element: <PostDetailPage />,
        loader: postsDetailPageLoader,
      },
    ],
  },
]);

export default router;
