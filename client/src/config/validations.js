export const required = value => (value || typeof value === 'number' ? undefined : 'Դաշտը պարտադիր է');

const maxLength = max => value =>
    value && value.length > max ? `Դաշտը չպետք է պարունակի ${max}-ից ավելի նշան` : undefined;

const minLength = min => value =>
    value && value.length < min ? `Դաշտը պետք է պարունակի առնվազն ${min} նշան` : undefined;

export const number = value =>
    value && isNaN(Number(value)) ? 'Դաշտը պետք է պարունակի միայն թվեր' : undefined;

export const maxLength6 = maxLength(6);