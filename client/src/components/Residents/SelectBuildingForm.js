import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { selectFieldStyles } from 'styles'
import renderSelectField from 'components/UI/fields/RenderSelectField'
import { getResidents } from 'actions/resident'


class SelectBuildingForm extends React.Component {

    componentDidMount() {
        const { initialValues, getResidents } = this.props;
        const buildingId = initialValues.address;
        getResidents(buildingId);
    }

    onSelectChangeHandler({ target: { value } }) {
        this.props.getResidents(value);
    }

    renderBuildings() {
        const { buildings } = this.props;
        
        return buildings.map(({ _id, address }) => (
            <MenuItem key={ _id } value={ _id }>{ address }</MenuItem>
        ));
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} autoComplete="off">

                <Field
                    isOutlined
                    onChange={ this.onSelectChangeHandler.bind(this) }
                    name="address"
                    component={ renderSelectField }
                    label="Շենք"
                >
                    { this.renderBuildings() }
                </Field>

            </form>
        );
    }
}

const mapStateToProps = ({ entities }) => {
    const buildings = entities.buildings.ids.map(id => entities.buildings.data.buildings[id]);
    return { buildings };
};

export default reduxForm({
    form: 'SelectBuildingForm'
})(withStyles(selectFieldStyles)(connect(mapStateToProps, { getResidents })(SelectBuildingForm)))
