import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

export default function Display() {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? "로그인됨" : "로그인 안됨"}</div>;
}
