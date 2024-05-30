import { useEffect, useState } from "react";
import { useToast } from "../../contexts/Toast.context";

const DURATION = 1200;

export const Toast = ({ id, title, content, time }) => {
  console.log("토스트 작동!");
  const toast = useToast();
  const [show, setShow] = useState(false);
  let timer;

  const deleteToast = async (time) =>
    new Promise((resolve) => {
      timer = setTimeout(() => {
        setShow(false);
        resolve();
      }, +time);
    }).then(() => {
      setTimeout(() => {
        toast.delete(id);
      }, DURATION);
    });

  useEffect(() => {
    setShow(true);
    deleteToast(+time);
  }, []);

  return (
    <div
      className={` bg-white mt-4 transition-all duration-[${DURATION.toString()}ms] w-[320px] h-[90px] pl-6 pr-10 flex flex-col justify-center rounded-md border border-solid border-gray-200 shadow-lg relative ${
        show ? "right-0" : "-right-[400px]"
      }`}
    >
      <h3 className="mb-1 font-extrabold text-gray-600 text-overflow">
        {title}
      </h3>
      <p>{content}</p>

      <button
        onClick={() => {
          clearInterval(timer);
          deleteToast();
        }}
        className="absolute w-6 h-6 font-black text-gray-500 bg-gray-200 top-2 right-2 rounded-xl"
      >
        x
      </button>
    </div>
  );
};
