import { Buttons } from "../Buttons";
import { Detail } from "../Detail";
import { MemoList } from "../MemoList";
import { StDiv, StLeftDiv } from "./Board.styled";

const Board = () => {
  return (
    <StDiv>
      <StLeftDiv>
        <Buttons />
        <MemoList />
      </StLeftDiv>
      <Detail />
    </StDiv>
  );
};

export { Board };
