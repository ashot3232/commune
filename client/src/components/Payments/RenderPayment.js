import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Field } from "redux-form"
import { Card, CardContent, Icon, MenuItem } from '@material-ui/core'

import RenderTextField from 'components/UI/fields/RenderTextField'
import renderSelectField from "components/UI/fields/RenderSelectField"
import RenderDatePickerField from "components/UI/fields/RenderDatePickerField"
import { required, number, maxLength6 } from "config/validations";
import { getResidents } from "actions";



class RenderPayment extends Component {

    componentDidMount() {
        this.props.getResidents(this.props.buildings[0]._id);
    }

    pushPayment() {
        const { fields, invalid } = this.props;

        if(!invalid) {
            const lastField = fields.get(fields.length - 1);
            fields.push({ date: new Date(), building: lastField.building });
        }
    }

    removePayment(index) {
        const { fields, getResidents } = this.props;
        fields.remove(index);
        const lastFieldIndex = fields.length - 1 === index ? index - 1 : index;
        const lastField = fields.get(lastFieldIndex);
        getResidents(lastField.building);
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

    renderApartments(index) {
        const { residents, fields } = this.props;

        if(index === fields.length - 1 && residents.length !== 0) {
            return residents.map(resident => {
                const value = JSON.stringify(resident);
                return (
                    <MenuItem key={ resident._id } value={ value }>
                        { `${resident.apartment} ( ${resident.name} )` }
                    </MenuItem>
                )
            });
        }

        const value = fields.get(index).resident;
        if(value) {
            const resident = JSON.parse(value);
            
            return (
                <MenuItem value={ value }>
                    { `${resident.apartment} ( ${resident.name} )` }
                </MenuItem>
            );
        }

        return [];
    }

    render() {
        const { fields, invalid } = this.props;
        return (
            <div>
                {
                    fields.map(( payments, index ) => {
                        return (
                            <Card key={payments} style={{width: '1250px', margin: '15px', padding: '1px'}}>

                                <CardContent>

                                    <Field
                                        disabled={index !== fields.length - 1}
                                        validate={[required]}
                                        onChange={ this.onSelectChangeHandler.bind(this) }
                                        name={`${payments}.building`}
                                        component={ renderSelectField }
                                        label="Շենք"
                                    >
                                        { this.renderBuildings() }
                                    </Field>
                                    <Field
                                        disabled={index !== fields.length - 1}
                                        validate={[required]}
                                        name={`${payments}.resident`}
                                        component={ renderSelectField }
                                        label="Բնակարան"
                                    >
                                        { this.renderApartments(index) }
                                    </Field>
                                    <Field
                                        disabled={index !== fields.length - 1}
                                        validate={[required, number, maxLength6]}
                                        name={`${payments}.amount`}
                                        component={ RenderTextField }
                                        label="Գումար"
                                    />
                                    <Field
                                        disabled={index !== fields.length - 1}
                                        validate={[required, number, maxLength6]}
                                        name={`${payments}.checkNumber`}
                                        component={ RenderTextField }
                                        label="Անդորագրի համար"
                                    />
                                    <Field
                                        disabled={index !== fields.length - 1}
                                        validate={[required]}
                                        name={`${payments}.date`}
                                        component={ RenderDatePickerField }
                                        label="Ամսաթիվ"
                                    />

                                    {index === fields.length - 1 && !invalid && <Icon
                                        style={{ fontSize: '32px', marginLeft: '15px', marginTop: '32px', cursor: "pointer" }}
                                        onClick={this.pushPayment.bind(this)}>
                                        add_circle
                                    </Icon>}

                                    {fields.length > 1 && <Icon
                                        style={{ fontSize: '32px', marginLeft: '15px', marginTop: '32px', cursor: "pointer" }}
                                        onClick={this.removePayment.bind(this, index)}>
                                        remove_circle
                                    </Icon>}
                                </CardContent>
                            </Card>
                        );
                    })
                }

            </div>
        );
    }
}

const mapStateToProps = ({ entities }) => {
    const buildings = entities.buildings.ids.map(id => entities.buildings.data.buildings[id]);
    const residents = entities.residents.ids.map(id => entities.residents.data.residents[id]);
    return {
        residents,
        buildings,
        residentsPending: entities.residents.pending,
        buildingsPending: entities.buildings.pending,
        buildingsInitialValues: entities.buildings.data && { address: entities.buildings.ids[0] }
    };
};


export default connect(mapStateToProps, { getResidents })(RenderPayment);
