import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import "./styles.css";

import DateRangePickerComponent from "./DateRangePickerComponent";

export default function DateRangePickerContainer(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateRangePickerComponent {...props} />
    </MuiPickersUtilsProvider>
  );
}
