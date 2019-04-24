import { schema } from "normalizr"

const buildingSchema = new schema.Entity('buildings', {}, {
    idAttribute: '_id'
});
const residentSchema = new schema.Entity('residents', {}, {
    idAttribute: '_id'
});

const Schemas = {
    BUILDINGS: [buildingSchema],
    RESIDENTS: [residentSchema],
    RESIDENT: residentSchema
};

export default Schemas;
