import React, { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { actions } from "./reducer";

import { CenterContainer, Header } from "@styled";
import { Field } from "@/components/Field";
import { ControlForm } from "@/components/ControlForm";

export const Game: FC = () => {
  const dispatch = useDispatch();
  const running = useSelector((state: RootState) => state.running);
  const field = useSelector((state: RootState) => state.field);

  const clickCell = (x: number, y: number, isFilled: boolean) => {
    dispatch(actions.clickField({ x, y, isFilled }));
  };

  const handleSize = (ev: ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = ev.target.value;
    dispatch(actions.changeSize(selectedSize));
  };
  const handleSpeed = (ev: ChangeEvent<HTMLSelectElement>) => {
    const speed = Number(ev.target.value);
    dispatch(actions.changeSpeed(speed));
  };
  const handleFilled = (ev: ChangeEvent<HTMLSelectElement>) => {
    const per = Number(ev.target.value);
    dispatch(actions.changeFilled(per));
  };
  const handleRunning = () => {
    dispatch(actions.runningGame());
  };
  const handleClear = () => console.log("this is stub");

  return (
    <CenterContainer>
      <Header>Conway's Game of Life</Header>
      <Field field={field} running={running} clickCell={clickCell} />
      <ControlForm
        running={running}
        handleSize={handleSize}
        handleSpeed={handleSpeed}
        handleFilled={handleFilled}
        handleRunning={handleRunning}
        handleClear={handleClear}
      />
    </CenterContainer>
  );
};
