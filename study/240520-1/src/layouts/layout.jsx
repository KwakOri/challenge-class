import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </div>
      <Outlet />
    </>
  );
};

export { Layout };
