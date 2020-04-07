import React from "react";
import ReactDOM from "react-dom";
import red from "@material-ui/core/colors/red";
import Container from "./Container";
import ContainerFromBundle from "./ContainerFromBundle";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

window.addEventListener("load", () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div>
        <h1>This is container from component </h1>
        <Container />
      </div>
      <div>
        <h1>This is container from bundle</h1>
        <ContainerFromBundle />
      </div>
    </ThemeProvider>,
    document.getElementById("root")
  );
});
