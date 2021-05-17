import React, { FC } from "react";
import { BoxContainer } from "@styled";
import { Cell } from "./Cell";

interface Props {
  field?: boolean[][];
  clickCell: (x: number, y: number, isFilled: boolean) => void;
  running: boolean;
}

export const Field: FC<Props> = (props) => {
  const { field, clickCell, running } = props;
  return (
    <BoxContainer>
      {field?.map((row, y) => [
        row?.map((isFilled, x) => (
          <Cell
            key={`${x}_${y}`}
            clickCell={clickCell}
            isFilled={isFilled}
            running={running}
            x={x}
            y={y}
          />
        )),
      ])}
    </BoxContainer>
  );
};
