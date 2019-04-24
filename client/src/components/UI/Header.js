import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { headerStyles } from 'styles'
import { signOut } from 'actions/auth'
import CustomButton from 'components/UI/Button'
import history from 'config/history'


class header extends Component {

    goToLastFifteenPayments() {
        history.push('/');
    }

    goToPayments() {
        history.push('/payments');
    }

    goToDebt() {
        history.push('/debt');
    }

    goToResidents() {
        history.push('/');
    }

    render() {
        const { classes, signOut } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.header}>
                    <Toolbar>
                        <Typography
                            onClick={ this.goToResidents }
                            variant="h6" style={{ cursor: 'pointer' }}
                            color="inherit" className={classes.grow}
                        >
                            Արգիշտի Համատիրություն
                        </Typography>
                        <CustomButton onClick={ this.goToLastFifteenPayments } label='Վերջին 50 Վճարներումները'/>
                        <CustomButton onClick={ this.goToPayments } label='Կատարել Վճարումներ'/>
                        <CustomButton onClick={ this.goToDebt } label='Ամրագրել Հերթական Ամսվա Պարտքը'/>
                        <Button onClick={ signOut } color="inherit">Դուրս Գալ</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};


export default withStyles(headerStyles)(connect(null, { signOut })(header));
