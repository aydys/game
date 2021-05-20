import styled from "@emotion/styled";

type CellProps = {
  isFilled: boolean;
};

export const CellStyled = styled.button<CellProps>`
  max-width: 10px;
  max-height: 10px;
  padding: 10px;
  border: 1px solid;
  display: inline-block;
  background-color: ${(props) => (props.isFilled ? "gray" : "aliceblue")};
`;
