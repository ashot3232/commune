

// Payment
const paymentsHeaderStyles = wb => {
    return wb.createStyle({
        font: {
            bold: true,
            size: 14
        },
        alignment: {
            vertical: 'center',
            horizontal: 'center'
        },
        fill: {
            type: 'pattern',
            patternType: 'darkGray',
            bgColor: '#72a6f9',
            fgColor: '#72a6f9'
        },
        border: {
            right: {
                style: 'thin',
                color: 'black'
            },
            top: {
                style: 'thin',
                color: 'black'
            },
            bottom: {
                style: 'thin',
                color: 'black'
            }
        }
    });
};

const printPaymentsHeaderStyles = wb => {
    return wb.createStyle({
        alignment: {
            shrinkToFit: true,
            wrapText: true,
            vertical: 'center',
            horizontal: 'center'
        },
        border: {
            right: {
                style: 'thin',
                color: 'black'
            },
            top: {
                style: 'thin',
                color: 'black'
            },
            bottom: {
                style: 'thin',
                color: 'black'
            }
        }
    });
};

const contentStyles = wb => {
    return wb.createStyle({
        font: {
            bold: false,
            size: 11
        },
        alignment: {
            shrinkToFit: true,
            vertical: 'center',
            horizontal: 'center'
        },
        border: {
            right: {
                style: 'thin',
                color: 'black'
            },
            top: {
                style: 'thin',
                color: 'black'
            },
            bottom: {
                style: 'thin',
                color: 'black'
            }
        }
    });
};

module.exports = { paymentsHeaderStyles, printPaymentsHeaderStyles, contentStyles };

