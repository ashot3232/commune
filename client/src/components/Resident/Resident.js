import React from 'react'
import { connect } from 'react-redux'
import { Typography, GridList, GridListTile, Card, CardActions, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { residentStyles } from 'styles'
import Button from 'components/UI/Button'
import TCount from 'components/Resident/TCount'
import { getResident } from 'actions'
import Progress from 'components/UI/Progress'



class Resident extends React.Component {
    componentDidMount() {
        this.props.getResident(this.props.id);
    }

    render() {
        const { classes, resident } = this.props;
        if(!resident) {
            return <Progress circle />;
        }
        
        return (
            <div className={classes.paper} elevation={10}>
                <div className={classes.root}>
                    <GridList cellHeight='auto' className={classes.gridList} cols={2}>
                        <GridListTile cols={1} >
                            <div className={classes.size}>

                                <Card className={classes.card}>
                                    <CardContent>
                                        <br/>
                                        <Typography component="h6" variant="h6">
                                            Անուն Ազգանուն
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.name }
                                        </Typography>

                                        <br/>

                                        <Typography component="h6" variant="h6">
                                            Շենք
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.building.address }
                                        </Typography>

                                        <br/>

                                        <Typography component="h6" variant="h6">
                                            Բնակարան
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.apartment }
                                        </Typography>

                                        <br/>

                                        <Typography component="h6" variant="h6">
                                            անդամավճար
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.membershipFee }
                                        </Typography>

                                        <br/>
                                    </CardContent>

                                </Card>

                                <Card className={classes.card}>
                                    <CardContent>
                                        <br/>

                                        <Typography component="h6" variant="h6">
                                            Անձերի թիվը
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.numberOfPersons }
                                        </Typography>

                                        <br/>

                                        <Typography component="h6" variant="h6">
                                            ընդ. ք/մ
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.overallSqm }
                                        </Typography>

                                        <br/>

                                        <Typography component="h6" variant="h6">
                                            մեկ քմ արժեք
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            { resident.sqmCost }
                                        </Typography>

                                        <br/>

                                    </CardContent>
                                    <CardActions>
                                        <Button label="Փոփոխել" icon='edit'/>
                                    </CardActions>
                                </Card>

                            </div>
                        </GridListTile>

                        <GridListTile cols={1}>
                            <TCount />
                        </GridListTile>
                    </GridList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        resident: state.entities.resident.data && state.entities.resident.data.residents[state.entities.resident.ids].resident
    };
};


export default withStyles(residentStyles)(connect(mapStateToProps, { getResident })(Resident));