import { useModal } from "@/contexts/modal.context";
import { Backdrop } from "@components/Backdrop";

export const Modal = ({ title, content }) => {
  const modal = useModal();
  const handleClickButton = () => {
    modal.close();
  };
  return (
    <Backdrop>
      <article className="modal">
        <p>{title}</p>
        <p>{content}</p>
        <button onClick={handleClickButton}>닫기</button>
      </article>
    </Backdrop>
  );
};
