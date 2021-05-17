import React, { FC } from "react";
import { CellStyled } from "../styled";

type Props = {
  running: boolean;
  isFilled: boolean;
  clickCell: (x: number, y: number, isFilled: boolean) => void;
  x: number;
  y: number;
};

export const Cell: FC<Props> = (props) => {
  const { running, isFilled, clickCell, x, y } = props;
  return (
    <CellStyled
      data-testid="cell-id"
      disabled={!running}
      isFilled={isFilled}
      onClick={() => clickCell(x, y, isFilled)}
    />
  );
};
