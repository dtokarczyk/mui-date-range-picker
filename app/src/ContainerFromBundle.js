import React from "react";
import Component from "../../dist";

const ContainerFromBundle = () => (
  <Component
    value={[]}
    placeholder="Container from bundle"
    onChange={(value) => {
      console.log(value);
    }}
  />
);

export default ContainerFromBundle;
