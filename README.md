# Material UI Date range picker

We still waiting for the core date range picker from MUI.

Until release it use this component.

Code it is fork from  https://github.com/mui-org/material-ui-pickers/issues/364#issuecomment-571813927

## Installation

Make sure that you ssh public key is added to your account in [git.tech.sp](http://git.tech.sp/). 

If you don't know try check this url `http://git.tech.sp/YOUR_NICKNAME/_ssh` and alternative add.

Then run: 
```
npm install git+ssh://git@git.tech.sp:2200/damian.tokarczyk/mui-date-range-picker.git
```

## Using

```javascript
import React from "react";
import DateRangePicker from "date-range-picker";

export default function App() {
  const [begin, setBegin] = React.useState(false);
  const [end, setEnd] = React.useState(false);

  return (
    <DateRangePicker
      autoOk
      open={obj} // optional, if you want to open through another element
      value={[]}
      placeholder="Select a date range"
      onOpen={() => console.log('some action')}
      onClose={() => console.log('some action')}
      onChange={values => {
        setBegin(values.begin);
        setEnd(values.end);
      }}
    />
  );
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Questions and suggestion should be send to @damian.tokarczyk