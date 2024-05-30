import { ScrollLockProvider } from "@yoojinyoung/usescrolllock/dist/scrollLock.context";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastProvider } from "./contexts/Toast.context.jsx";
import "./index.css";

const useScrolllock = ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ScrollLockProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ScrollLockProvider>
);
