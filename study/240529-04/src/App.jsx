import "./App.css";
import { useModal } from "./contexts/modal.context";

function App() {
  const modal = useModal();
  const handleClickButton = () => {
    modal.open({ title: "hello", content: "bye" });
  };

  return (
    <div className="layout">
      <button onClick={handleClickButton}>모달창</button>
      {Array(5000)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
    </div>
  );
}

export default App;
