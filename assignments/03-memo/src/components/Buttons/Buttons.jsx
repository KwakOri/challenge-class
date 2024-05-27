import { useDispatch, useSelector } from "react-redux";
import { addMemo, deleteMemo } from "../../redux/memoSlice";
import { StDiv } from "./Buttons.styled";

const Buttons = () => {
  const dispatch = useDispatch();
  const { currMemoId } = useSelector((state) => state.memo);
  console.log(currMemoId);
  return (
    <StDiv>
      <button
        onClick={() => {
          dispatch(addMemo());
        }}
      >
        새 메모 작성하기
      </button>
      <button
        onClick={() => {
          dispatch(deleteMemo(currMemoId));
        }}
      >
        삭제
      </button>
    </StDiv>
  );
};

export { Buttons };
