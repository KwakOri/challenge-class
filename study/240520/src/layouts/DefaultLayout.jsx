import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">포스트 상세 페이지</Link>

      <Outlet />
    </>
  );
};

export default DefaultLayout;
