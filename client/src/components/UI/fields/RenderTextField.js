import React from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { textFieldStyles } from 'styles'



const renderTextField = ({ classes, fullWidth, name, label, input, meta: { touched, error, invalid }, ...custom }) => (
    <TextField
        className={classes[fullWidth ? 'fullWidth' : 'textField']}

        margin="normal"
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export default withStyles( textFieldStyles )( renderTextField );
