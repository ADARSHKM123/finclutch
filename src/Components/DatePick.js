import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import './DatePicker.css';

const CustomDesktopDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
  '& .MuiInputAdornment-root': {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
    height: '2.01em',
    maxHeight: '15em',
  },
  '& .MuiIconButton-root': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    fontSize: '1.5rem',
    borderRadius: '50%',
    marginRight: '14px',
    color: 'rgba(152, 45, 236, 1)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
}));

export default function ResponsiveDatePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['Date']}>
        <DemoItem label="Date">
        <DesktopDatePicker 
            className="custom-desktop-datepicker"
            defaultValue={dayjs('2022-04-17')}
            format="DD/MM/YYYY"
            renderInput={(params) => <TextField {...params} />}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
