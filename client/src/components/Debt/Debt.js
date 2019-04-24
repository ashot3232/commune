import React from 'react'
import { Table, TableBody, TableCell, TableRow, Icon } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { debtStyles } from 'styles'
import Button from 'components/UI/Button'



let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Ապրիլ 2019'),
    createData('Մայիս 2019'),
    createData('Հունիս 2019'),
    createData('Հուլիս 2019'),
    createData('Օգոստոս 2019')
];

const debt = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Button label="Ձեվակերպել հաջորդ ամսվա պարտքը" icon='attach_money'/>
            <Table className={classes.table}>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                <Icon className={classes.icon}>done</Icon>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default withStyles(debtStyles)(debt);
