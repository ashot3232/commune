import React from 'react'
import {FormControl, Select, InputLabel, OutlinedInput, FormHelperText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { selectFieldStyles } from 'styles'



const renderSelectField = ({ input, disabled, label, children, classes, isOutlined, meta: { touched, error, invalid } }) => (
    <FormControl disabled={disabled} variant="outlined" className={ classes.formControl } error={touched && invalid}>
        <InputLabel>{ label }</InputLabel>

        <Select
            { ...input }
            input={ isOutlined && <OutlinedInput labelWidth={37} /> }
        >
            { children }
        </Select>
        <FormHelperText>{touched && error}</FormHelperText>
    </FormControl>
);

export default withStyles( selectFieldStyles )( renderSelectField );
