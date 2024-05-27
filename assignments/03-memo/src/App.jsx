import { Provider } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { Board } from "./components/Board";
import { store } from "./redux/store";
function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Board />
      </Provider>
    </>
  );
}

export default App;
