import React, { FC, ChangeEvent } from "react";
import { BoxContainer, ButtonStyled } from "@styled";

interface Props {
  handleSize: (ev: ChangeEvent<HTMLSelectElement>) => void;
  handleSpeed: () => void;
  handleFilled: () => void;
  handleRunning: () => void;
  handleClear: () => void;
  running: boolean;
  size: string;
  speed: number;
  filled: number;
};

export const ControlForm: FC<Props> = (props) => {
  const { handleSize, handleSpeed, handleFilled, handleRunning, handleClear, running, size, speed, filled } = props;
  return <>
    <BoxContainer>
      <form>
        <label htmlFor="size">Size:</label>
        <select id="size" value={size} onChange={handleSize} disabled={!running}>
          <option value="small">small</option>
          <option value="middle">middle</option>
          <option value="large">large</option>
        </select>
        <label htmlFor="speed">Speed:</label>
        <select id="speed" value={speed} disabled={!running}>
          <option value={800}>slow</option>
          <option value={500}>normal</option>
          <option value={200}>fast</option>
        </select>
        <label htmlFor="filled">Filled:</label>
        <select id="filled" value={filled} disabled={!running}>
          <option value={0}>0</option>
          <option value={0.1}>10%</option>
          <option value={0.25}>25%</option>
          <option value={0.5}>50%</option>
        </select>
      </form>
    </BoxContainer>
    <BoxContainer>
      <ButtonStyled onClick={handleRunning}>
        { running ? 'Stop' : 'Run' }
      </ButtonStyled>
    </BoxContainer>
  </> ;
};
