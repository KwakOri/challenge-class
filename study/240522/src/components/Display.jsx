import { useSelector } from "react-redux";

const Display = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const status = isLoggedIn ? "O" : "X";
  return (
    <div style={{ borderBottom: "1px solid black" }}>
      현재 로그인이 {status} 상태입니다.
    </div>
  );
};

export default Display;
