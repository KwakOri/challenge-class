import styled from "styled-components";

const StDiv = styled.div`
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & h3 {
    flex: 0 0 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: #808080;
  }
`;
const StTextarea = styled.textarea`
  box-sizing: border-box;
  padding: 20px;
  font-size: 15px;
  line-height: 25px;
  resize: none;
  border: none;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

export { StDiv, StTextarea };
