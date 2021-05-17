import React, { FC } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ControlForm } from "./ControlForm";

export default {
  title: "ControlForm",
  decorators: [withKnobs]
};

export const ControlFormStory: FC = () => {
  return <ControlForm
    running={boolean('running', true)}
    handleSize={action('change size')}
    handleSpeed={action('change speed')}
    handleFilled={action('change filled')}
    handleRunning={action('change running')}
    handleClear={action('clear field')}
  />
}
