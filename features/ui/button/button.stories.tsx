import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";
import { ButtonIcon } from "./button-icon";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  color,
  size,
  disabled,
  children,
}) => (
  <div style={{ padding: 100 }}>
    <Button color={color} size={size} disabled={disabled}>
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: ButtonColor.primary,
  size: ButtonSize.md,
  disabled: false,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  color: ButtonColor.primary,
  size: ButtonSize.md,
  disabled: false,
  children: <ButtonIcon src="/icons/message.svg" alt="message icon" />,
};
IconOnly.parameters = {
  viewMode: "docs",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  color: ButtonColor.primary,
  size: ButtonSize.md,
  disabled: false,
  children: (
    <>
      <ButtonIcon src="/icons/message.svg" alt="message icon" /> Button CTA
    </>
  ),
};
IconLeft.parameters = {
  viewMode: "docs",
};

export const IconRight = Template.bind({});
IconRight.args = {
  color: ButtonColor.primary,
  size: ButtonSize.md,
  disabled: false,
  children: (
    <>
      Button CTA <ButtonIcon src="/icons/message.svg" alt="message icon" />
    </>
  ),
};
IconRight.parameters = {
  viewMode: "docs",
};
