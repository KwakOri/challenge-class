import styled from "styled-components";

const StDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  border-radius: 4px;
  ${(props) => props.selected && `background-color: #ffe07f;`}
  padding: 10px 20px;
  margin-bottom: 10px;

  & h2 {
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    color: #2d2d2d;
    margin-bottom: 4px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  & p {
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: #808080;
  }
`;

export { StDiv };
