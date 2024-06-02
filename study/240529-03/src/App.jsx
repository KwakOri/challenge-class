import "./App.css";
import "./components/custom.css";
import { useModal } from "./contexts/modal.context";


function App() {
  // custom hook인 useModal을 실행.
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "hello", content: "bye" });
  };

  // 스크롤 크기를 늘리기 위한 더미들
  return (
    <div>
      <button onClick={handleClickButton}>모달띄우기</button>
      {Array(5000)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
    </div>
  );
}

export default App;
