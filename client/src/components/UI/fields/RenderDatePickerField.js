import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { textFieldStyles } from 'styles'
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import "moment/locale/hy-am"


const renderDatePickerField = ({ label, disabled, input, meta: { touched, error, invalid }, }) => (
    <MuiPickersUtilsProvider utils={ MomentUtils } moment={moment}>
        <DatePicker
            disabled={disabled}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            margin="normal"
            label={label}
        />
    </MuiPickersUtilsProvider>
);

export default withStyles( textFieldStyles )( renderDatePickerField );
