import React, { FC } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import {
  Header,
  BoxContainer,
  CellStyled,
  CenterContainer,
  ButtonStyled,
} from "./index";

export default {
  title: "Styled Components",
  decorators: [withKnobs],
};

export const CenterContainerStory: FC = () => (
  <CenterContainer>CenterContainer</CenterContainer>
);
export const HeaderStory: FC = () => <Header>Header</Header>;
export const BoxContainerStory: FC = () => (
  <BoxContainer>BoxContainer</BoxContainer>
);
export const ButtonStory: FC = () => <ButtonStyled>Button</ButtonStyled>;
export const CellStyledStory: FC = () => (
  <CellStyled isFilled={boolean("isFilled", true)}></CellStyled>
);
