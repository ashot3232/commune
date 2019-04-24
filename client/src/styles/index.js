export const buttonStyles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

export const selectFieldStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '15px',
        marginTop: '30px'
    },
    formControl: {
        width: '250px',
        marginTop: theme.spacing.unit * 2,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    select: {
        padding: '10px'
    }
});

export const textFieldStyles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    fullWidth: {
        width: '100%'
    }
});

export const headerStyles = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        background: '#0b4995'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
});

export const signInStyles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

export const debtStyles = theme => ({
    root: {
        width: '50%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        marginTop: '30px',
        minWidth: 700,
    },
    icon: {
        color: 'green'
    }
});

export const residentStyles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        padding: theme.spacing.unit * 2,
    },
    root: {
        width: '1115px',
        margin: theme.spacing.unit * 5,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: 'theme.palette.background.paper'
    },
    gridList: {
        width: 1500
    },
    size: {
        width: '600px'
    },
    card: {
        width: '500px',
        margin: '5px',
        marginBottom: '15px',
        padding: '10px'
    }
});

export const tableStyles = theme => ({
    root: {
        width: '98%',
        margin: '15px',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700
    },
    tableRow: {
        cursor: 'pointer',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
});

export const tCountStyles = theme => ({
    root: {
        width: '450px',
        margin: '5px',
        padding: '30px',
        overflowX: 'auto',
    },
    table: {
        minWidth: 450,
    },
});

export const customTableCellStyles = theme => ({
    head: {
        backgroundColor: '#4376a1',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
});

export const paymentsStyles = theme => ({

});

export const paymentsFormStyles = theme => ({
    card: {
        minWidth: 275,
        width: 1200,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
});
