import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { AuthProvider } from "./contexts/auth.context";

// comp 안에서 만들면 계속 리렌더링되니까 안됨

function App() {
  return (
    <>
      <AuthProvider>
        <Display />
        <Button />
      </AuthProvider>
    </>
  );
}

export default App;
