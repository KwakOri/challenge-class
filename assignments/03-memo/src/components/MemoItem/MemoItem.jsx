/* eslint-disable react/prop-types */
import { getFormatedDate } from "../../utils";
import { StDiv } from "./MemoItem.styled";

const MemoItem = ({ selected, body, time }) => {
  console.log(selected);
  return (
    <StDiv selected={selected}>
      <h2>{body}</h2>
      <p>{getFormatedDate(time, "short")}</p>
    </StDiv>
  );
};

export { MemoItem };
