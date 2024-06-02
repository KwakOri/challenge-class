import { useShallow } from "zustand/react/shallow";
import useLoggedInStore from "../zustand/login.store";

export default function Button() {
  const logIn = useLoggedInStore((state) => state.logIn);
  const logOut = useLoggedInStore((state) => state.logOut);

  // const { logIn, logOut } = useLoggedInStore(
  //   useShallow((state) => ({
  //     logIn: state.logIn,
  //     logOut: state.logOut,
  //   }))
  // );

  console.log("button rerendered");
  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}
