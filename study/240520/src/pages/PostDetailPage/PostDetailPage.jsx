import { useLoaderData } from "react-router-dom";

const PostDetailPage = () => {
  const post = useLoaderData();
  return (
    <>
      <h2>상세 페이지</h2>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

export { PostDetailPage };
