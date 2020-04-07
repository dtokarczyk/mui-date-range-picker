import React from "react";
import Component from "../../src/index";

const Container = () => (
  <Component
    value={[]}
    placeholder="Container from component"
    onChange={(value) => {
      console.log(value);
    }}
  />
);

export default Container;
