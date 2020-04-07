import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";

import DateRangePicker from "./component/DateRangePicker";

const Component = (props) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DateRangePicker {...props} />
  </MuiPickersUtilsProvider>
);

export default Component;
