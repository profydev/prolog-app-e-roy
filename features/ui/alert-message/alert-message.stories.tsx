import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { AlertMessage } from "./alert-message";

export default {
  title: "UI/AlertMessage",
  component: AlertMessage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof AlertMessage>;

const Template: StoryFn<typeof AlertMessage> = ({ message, onTryAgain }) => (
  <div style={{ padding: 10 }}>
    <AlertMessage message={message} onTryAgain={onTryAgain} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  message: "An error occurred",
  onTryAgain: () => console.log("try again"),
};
Default.parameters = {
  viewMode: "docs",
};
