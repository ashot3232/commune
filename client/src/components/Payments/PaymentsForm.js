import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, FieldArray } from "redux-form"
import { withStyles } from '@material-ui/core/styles'

import { paymentsFormStyles } from 'styles'
import Button from "components/UI/Button"
import RenderPayment from "components/Payments/RenderPayment"




class PaymentsForm extends Component {

    onSubmitHandler(values) {
        const { onSubmitHandler } = this.props;
        onSubmitHandler(values);
    }

    render() {
        const { classes, handleSubmit, invalid, change } = this.props;
        return (
            <div elevation={10}>

                <form onSubmit={ handleSubmit(this.onSubmitHandler.bind(this)) } className={classes.container} noValidate autoComplete="off">
                    <FieldArray name="payments" component={RenderPayment} invalid={invalid} change={change}/>
                    <div style={{display: 'block'}}>
                        <Button type='submit' label='Submit'/>
                    </div>

                </form>

            </div>
        );
    }
}


export default reduxForm({
    form: 'PaymentsForm'
})(withStyles(paymentsFormStyles)(connect(null, null)(PaymentsForm)))
