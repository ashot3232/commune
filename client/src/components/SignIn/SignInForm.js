import React, { Component } from 'react'
import {Field, reduxForm } from 'redux-form'
import { withStyles} from "@material-ui/core";
import { signInStyles } from "styles";
import RenderTextField from 'components/UI/fields/RenderTextField'
import { required } from "config/validations";
import Button from "components/UI/Button";


class SignInForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={ this.props.handleSubmit( this.props.onSubmit ) } className={classes.form}>
                <Field
                    fullWidth
                    validate={[required]}
                    name="password"
                    type="password"
                    component={ RenderTextField }
                    label="Գաղտնաբառ"
                />

                <Button fullWidth type='submit' label='Մուտք'/>

            </form>
        );
    }
}

export default reduxForm({
    form: 'SignInForm'
})(withStyles(signInStyles)((SignInForm)))
