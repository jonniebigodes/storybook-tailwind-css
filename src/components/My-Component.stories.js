import React from "react";

import MyComponent from "./My-Component";

/* eslint-disable */
export default {
  component: MyComponent,
  decorators: [
    (story) => <div className="container mx-auto flex flex-row">{story()}</div>,
  ],
  title: "Example component with Tailwind",
};

/* eslint-enable */

const Template = (args) => <MyComponent {...args} />;

export const Example = Template.bind({});

Example.args = {
  propertyA: "One banana....AHAHAHAH",
  propertyB: "Two....AHAHAHA....Two bananas",
};

export const MultipleExamples = (args) => {
  const DummyComponents = [...Array(10).keys()];
  console.log(DummyComponents);
  return (
    <>
      {DummyComponents.map((item) => (
        <MyComponent key={item} {...args} />
      ))}
    </>
  );
};
MultipleExamples.args = {
  ...Example.args,
};
