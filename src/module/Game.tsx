import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { actions } from "./reducer";

import { CenterContainer, Header } from "@styled";
import { Field } from "@/components/Field";

export const Game: FC = () => {
  const dispatch = useDispatch();
  const running = useSelector((state: RootState) => state.running);
  const field = useSelector((state: RootState) => state.field);

  const clickCell = (x: number, y: number, isFilled: boolean) => {
    dispatch(actions.clickField({ x, y, isFilled }));
  };

  return (
    <CenterContainer>
      <Header>Conway's Game of Life</Header>
      <Field field={field} running={running} clickCell={clickCell} />
    </CenterContainer>
  );
};
