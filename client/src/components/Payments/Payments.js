import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'
import {reset} from 'redux-form';
import { paymentsStyles } from 'styles'
import PaymentsForm from 'components/Payments/PaymentsForm'
import Dialog from 'components/UI/Dialog'
import { closeDialog, openDialog, makePayments, getBuildings, getResidents } from "actions";




class Payments extends Component {

    componentDidMount() {
        this.props.getBuildings();
    }

    onSubmitHandler(values){
        const { openDialog } = this.props;
        openDialog(values);

    }

   async makePayments() {
        const { data, closeDialog, buildings, makePayments, reset, getResidents } = this.props;
        const body = {
            payments: data.payments.map(p => ({ ...p, resident: JSON.parse(p.resident) }))
        };
        await makePayments(body);
        reset('PaymentsForm');
        closeDialog();
        getResidents(buildings[0]._id);
    }

    render() {
        const { closeDialog, buildings } = this.props;

        if(buildings.length === 0) {
            return null;
        }
        const initialValues = {
            payments: [{ date: new Date(), building: buildings[0]._id }]
        };

        return (
            <div elevation={10}>
                <Dialog>
                    <DialogTitle id="alert-dialog-title">Վճարումներ</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Ցանկանում եք կատարել վճարումները և արտահանել excel?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ closeDialog } color="secondary" autoFocus>
                            Չեղարկել
                        </Button>
                        <Button onClick={ this.makePayments.bind(this) } color="primary">
                            Կատարել
                        </Button>
                    </DialogActions>
                </Dialog>

                <PaymentsForm
                    onSubmitHandler={ this.onSubmitHandler.bind(this) }
                    initialValues={ initialValues }
                />

            </div>
        );
    }
}

const mapStateToProps = ({ entities, dialog: { data } }) => {
    const buildings = entities.buildings.ids.map(id => entities.buildings.data.buildings[id]);

    return {
        data,
        buildings,
        buildingsPending: entities.buildings.pending,
        buildingsInitialValues: entities.buildings.data && { address: entities.buildings.ids[0] }
    };
};

export default withStyles(paymentsStyles)(connect(mapStateToProps, { closeDialog, reset, getResidents, openDialog, makePayments, getBuildings })(Payments));