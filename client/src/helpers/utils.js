import { SubmissionError } from "redux-form";


export const checkSubmissionErrors = error => {
    if(error.name === "ValidationError") {
        const errors = {};
        Object.keys(error.errors).forEach(e => {
            errors[e] = error.errors[e].message;
        });
        throw new SubmissionError({
            ...errors,
            _error: 'validation failed!'
        })
    }
};
