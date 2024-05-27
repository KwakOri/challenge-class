import { useDispatch, useSelector } from "react-redux";
import { updateMemo } from "../../redux/memoSlice";
import { getFormatedDate } from "../../utils";
import { StDiv, StTextarea } from "./Detail.styled";

const Detail = () => {
  const dispatch = useDispatch();
  const { currMemoId, memoList } = useSelector((state) => state.memo);
  console.log(currMemoId, memoList);
  const currMemo = memoList.find((item) => item._id === currMemoId);
  return (
    <StDiv>
      <h3>{getFormatedDate(currMemo.date)}</h3>
      <StTextarea
        value={currMemo.content}
        onChange={(e) => {
          dispatch(updateMemo({ id: currMemoId, content: e.target.value }));
        }}
      ></StTextarea>
    </StDiv>
  );
};

export { Detail };
