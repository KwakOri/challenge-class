import useLoggedInStore from "../zustand/login.store";

export default function Display() {
  const isLoggedIn = useLoggedInStore((state) => state.isLoggedIn);
  return <div>{isLoggedIn ? "로그인됨" : "로그인 안됨"}</div>;
}
