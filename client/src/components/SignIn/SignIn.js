import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, CssBaseline, Paper, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { signInStyles } from 'styles'
import SignInForm from 'components/SignIn/SignInForm'
import { signIn } from 'actions/auth'



class SignIn extends Component {

    onSubmitHandler({ password }) {
        const data = { password, username: 'argishti' };

        return this.props.signIn(data);
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Մուտք
                    </Typography>

                    <SignInForm onSubmit={ this.onSubmitHandler.bind( this ) } />

                </Paper>
            </main>
        );
    }
}


export default withStyles(signInStyles)( connect(null, { signIn })(SignIn) );
