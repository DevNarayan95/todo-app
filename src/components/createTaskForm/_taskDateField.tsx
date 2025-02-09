import { FC, ReactElement } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

export const TaskDataField: FC<IDateField> = (props): ReactElement => {
  // Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task date"
        value={value}
        onChange={onChange}
        format="dd/MM/yyyy"
        disabled={disabled}
        slotProps={{
          textField: { fullWidth: true },
        }}
      />
    </LocalizationProvider>
  );
};

TaskDataField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
