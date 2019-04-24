import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'
import classNames from 'classnames'
import history from 'config/history'
import { withStyles } from '@material-ui/core/styles'
import { tableStyles, customTableCellStyles } from 'styles'
import SelectBuildingForm from 'components/Residents/SelectBuildingForm'
import Progress from 'components/UI/Progress'
import { getBuildings } from 'actions/building'


const CustomTableCell = withStyles(customTableCellStyles)(TableCell);


class Residents extends Component {

    componentDidMount() {
        this.props.getBuildings();
    }

    goToResident(id) {
        history.push(`/resident/${id}`);
    }

    renderResidents() {
        const { residents, classes } = this.props;
        return residents.map(resident => (
            <TableRow key={resident._id} onClick={ this.goToResident.bind(this, resident._id) } className={classNames(classes.tableRow, classes.row)} >
                <CustomTableCell component="th" scope="row">
                    {resident.building.address}
                </CustomTableCell>
                <CustomTableCell align="center">{ resident.name }</CustomTableCell>
                <CustomTableCell align="center">{ resident.apartment }</CustomTableCell>
                <CustomTableCell align="center">{ resident.numberOfPersons }</CustomTableCell>
                <CustomTableCell align="center">{ resident.overallSqm }</CustomTableCell>
                <CustomTableCell align="center">{ resident.sqmCost }</CustomTableCell>
                <CustomTableCell align="center">{ resident.membershipFee }</CustomTableCell>
            </TableRow>
        ));
    }


    render() {
        const { classes, buildingsInitialValues, residentsPending, buildingsPending } = this.props;

        if(buildingsPending) {
            return <Progress circle/>;
        }


        return (
            <React.Fragment>

                <div style={{ display: 'flex' }}>
                    { buildingsInitialValues && <SelectBuildingForm initialValues={ buildingsInitialValues } />}
                    { residentsPending && <Progress/> }
                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Շենք</CustomTableCell>
                                <CustomTableCell align="center">ԱԱՀ</CustomTableCell>
                                <CustomTableCell align="center">Բնակարան</CustomTableCell>
                                <CustomTableCell align="center">Անձերի թիվ</CustomTableCell>
                                <CustomTableCell align="center">ընդ. ք/մ</CustomTableCell>
                                <CustomTableCell align="center">ք/մ արժեք</CustomTableCell>
                                <CustomTableCell align="center">անդ.վճար</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { this.renderResidents() }
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }

}

const mapStateToProps = ({ entities }) => {
    const residents = entities.residents.ids.map(id => entities.residents.data.residents[id]);
    const buildings = entities.buildings.ids.map(id => entities.buildings.data.buildings[id]);

    return {
        residents,
        residentsPending: entities.residents.pending,
        buildings,
        buildingsPending: entities.buildings.pending,
        buildingsInitialValues: entities.buildings.data && { address: entities.buildings.ids[0] }
    };
};

export default withStyles(tableStyles)( connect(mapStateToProps, { getBuildings })(Residents) );
