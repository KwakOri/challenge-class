import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

export default function Button() {
  console.log("button rerendered");
  const { logIn, logOut } = useContext(AuthContext);
  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}
