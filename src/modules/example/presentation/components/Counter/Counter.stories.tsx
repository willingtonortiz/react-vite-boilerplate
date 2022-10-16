import { ComponentMeta } from "@storybook/react";
import { Counter } from "./Counter";

export default {
  title: "example/temp/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

export const Default = () => <Counter />;
