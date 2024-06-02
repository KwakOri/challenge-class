import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

// 1. 만들기

// 2. 사용한다
const initialValue = {
  open: () => {},
  close: () => {},
};
const ModalContext = createContext(initialValue);
export const useModal = () => useContext(ModalContext);

// 3. 범위 정해서 값 내려주기

export function ModalProvider({ children }) {
  const scrolllock = useScrollLock();
  const [modalOptions, setModalOptions] = useState(null);
  const value = {
    open: (options) => {
      setModalOptions(options);
      scrolllock.lock();
    },
    close: () => {
      setModalOptions(null);
      scrolllock.release();
    },
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}

// custom hook
