import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#c49d44",
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "white",
                color: "#906f13"
            }
        }
    }
})

export default function Scheduler() {
    const [value, setValue] = React.useState(dayjs('today'));


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <ThemeProvider theme={theme}>
                    <DateTimePicker
                        label="Schedule a Time"
                        renderInput={(params) => <TextField {...params} />}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        components={{
                            disablePast: true,
                            minutesStep: 15,
                        }}
                        componentsProps={{
                            actionBar: {
                                actions: ['today']
                            },
                        }}
                    />
                </ThemeProvider>
            </Stack>
        </LocalizationProvider>
    );
}