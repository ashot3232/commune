import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableRow, Divider, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { tCountStyles } from 'styles'
import { getTCountExcel } from 'actions'
import Button from "components/UI/Button"



class TCount extends React.Component {
    render() {
        const { classes, resident: { tCount, initialDebt, finalDebt } } = this.props;
        return (
            <Paper className={classes.root}>

                <Button label="Կատարել վՃարում" icon='monetization_on'/>
                <Button onClick={() => this.props.getTCountExcel(this.props.id) } label="Արտահանել Excel" icon='save_alt'/>
                {/*<Button label="Պակասեցնել" icon='money_off'/>*/}
                <br/>
                <Divider/>
                <br/>

                <Typography variant="subtitle1" color="textSecondary">
                    Սկզբնական մն. {moment(initialDebt.date).format('DD/MM/YYYY')} - ի դրությամբ՝ { initialDebt.amount }դր
                </Typography>

                <br/>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Ամսաթիվ</TableCell>
                            <TableCell align="left">Անդ</TableCell>
                            <TableCell align="center">Մուտք</TableCell>
                            <TableCell align="center">Պարտք</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tCount.map(t => (
                            <TableRow key={t._id}>
                                <TableCell component="th" scope="row">
                                    { moment(t.date).format('Do/MM/YYYY')  }
                                </TableCell>
                                <TableCell align="left">{ t.checkNumber || '-' }</TableCell>
                                <TableCell align="center">{ t.type === 'payment' ? `${t.amount}դր` : '-' }</TableCell>
                                <TableCell align="center">{ t.type === 'debt' ? `${t.amount}դր` : '-' }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br/>
                <br/>
                <Typography align='right' variant="subtitle1" color="textSecondary">
                    Վերջնական մն. { finalDebt }դր
                </Typography>

            </Paper>
        );
    }
}


const mapStateToProps = state => {
    return {
        id: state.entities.resident.data && state.entities.resident.data.residents[state.entities.resident.ids].resident._id,
        resident: state.entities.resident.data && state.entities.resident.data.residents[state.entities.resident.ids]
    };
};

export default withStyles(tCountStyles)(connect(mapStateToProps, { getTCountExcel })(TCount));
