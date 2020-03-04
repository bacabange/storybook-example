import React from "react";
import { action, actions } from "@storybook/addon-actions";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button
};

export const Default = () => <Button onClick={action("clicked")}>Default</Button>;
