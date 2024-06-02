import { Modal } from "@components/Modal";
import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
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
};
