import { useDispatch, useSelector } from "react-redux";
import { setMemoId } from "../../redux/memoSlice";
import { MemoItem } from "../MemoItem";
import { StDiv } from "./MemoList.styled";

const MemoList = () => {
  const { memoList } = useSelector((state) => state.memo);
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.memo.currMemoId);
  console.log(selectedId);
  console.log(memoList);

  return (
    <StDiv>
      {memoList.map((item) => (
        <li
          key={item._id}
          id={item._id}
          onClick={() => {
            dispatch(setMemoId(item._id));
          }}
        >
          <MemoItem
            selected={selectedId === item._id}
            body={item.content}
            time={item.date}
          />
        </li>
      ))}
    </StDiv>
  );
};

export { MemoList };
