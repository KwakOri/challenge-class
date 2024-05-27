import styled from "styled-components";

const StDiv = styled.div`
  flex: 0 0 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 48px;
  width: 240px;
  border-bottom: 1px solid #e6e6e6;

  & button {
    cursor: pointer;
    font-weight: 500;
    color: #808080;
    font-size: 13px;
    background-color: transparent;
    border: none;
  }
`;

export { StDiv };
