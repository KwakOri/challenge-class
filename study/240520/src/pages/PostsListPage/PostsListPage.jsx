import { Link, useLoaderData } from "react-router-dom";

const PostsListPage = () => {
  // 데이터 불러오기
  const posts = useLoaderData();
  return (
    <>
      <h2>포스트 목록 페이지</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { PostsListPage };
