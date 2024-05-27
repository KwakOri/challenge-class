import styled from "styled-components";

const StDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1020px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
`;

const StLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  overflow: hidden;
  border-right: 1px solid #e6e6e6;
`;

export { StDiv, StLeftDiv };
