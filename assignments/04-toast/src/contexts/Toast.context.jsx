import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "../components/Toast/Toast";

const initialValue = {
  add: () => {},
  delete: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const value = {
    add: ({ title, content, time }) => {
      setToasts((prev) => [...prev, { title, content, time, id: uuidv4() }]);
    },
    delete: (id) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="absolute bottom-10 right-10">
        {toasts &&
          toasts.map((toast, i) => (
            <Toast
              id={toast.id}
              key={toast.id}
              title={toast.title}
              content={toast.content}
              time={toast.time}
            />
          ))}
      </div>
    </ToastContext.Provider>
  );
};
