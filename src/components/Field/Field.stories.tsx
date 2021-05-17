import React, { FC } from "react";
import { boolean, object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Field } from "./Field";

export default {
  title: "Field",
  decorators: [withKnobs],
};

export const FieldStory: FC = () => {
  return (
    <Field
      running={boolean("running", true)}
      field={object("field", [[true]])}
      clickCell={action("click cell")}
    />
  );
};
