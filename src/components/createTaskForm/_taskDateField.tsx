// import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@date-io/date-fns';

import { FC, ReactElement, useState } from 'react';

export const TaskDataField: FC = (): ReactElement => {
  // State
  const [date, setDate] = useState<Date | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task date"
          //   inputFormat="dd/MM/yyyy"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          //   renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};
