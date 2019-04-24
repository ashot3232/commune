import React from 'react'
import { Button, Icon } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { buttonStyles } from 'styles'



const containedButtons = ({ fullWidth, onClick, classes, style, label, icon, type='button' }) => (
    <Button onClick={onClick} fullWidth={fullWidth} type={type} variant="contained" className={classes.button} style={style}>
        { icon && <Icon>{ icon }</Icon>} { label }
    </Button>
);

export default withStyles(buttonStyles)(containedButtons);
