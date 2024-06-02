import { useToast } from "../../contexts/Toast.context";
import useInputs from "../../hooks/useInputs";
import { Input } from "../Input/Input";

export const Form = () => {
  const [{ title, content, time }, onChange, reset] = useInputs({
    title: "",
    content: "",
    time: "",
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, content, time } = e.target;
    const newToast = {
      title: title.value,
      content: content.value,
      time: time.value,
    };
    if (newToast.time === "") {
      newToast.time = 2000;
    }
    toast.add(newToast);
    // reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-between  w-[320px] h-[370px]"
    >
      <h2 className="text-2xl font-bold">토스트 컨트롤러</h2>
      <div className="flex flex-col w-full gap-y-4">
        <Input
          value={title}
          onChange={onChange}
          label={"제목 (필수)"}
          name={"title"}
          type={"text"}
        />
        <Input
          value={content}
          onChange={onChange}
          label={"내용 (필수)"}
          name={"content"}
          type={"text"}
        />
        <Input
          value={time}
          onChange={onChange}
          label={"노출 시간(ms) (선택)"}
          name={"time"}
          type={"number"}
          required={false}
        />
      </div>
      <button className="w-full h-12 text-white bg-black rounded-md">
        토스트 띄우기
      </button>
    </form>
  );
};
