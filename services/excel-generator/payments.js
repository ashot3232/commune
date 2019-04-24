const xl = require('excel4node');
const { paymentsHeaderStyles, contentStyles, printPaymentsHeaderStyles } = require('./styles');

const createPaymentsHeader = (wb, ws, cells) => {
    // TODO translate headers
    const keys = Object.keys(cells);
    ws.row(1).setHeight(32);
    ws.row(1).filter();
    keys.forEach((cell, index) => {
        ws.column(index + 1).setWidth(23);
        ws.cell(1, index + 1).string(cell).style(paymentsHeaderStyles(wb));
    });
};

const createPaymentsContent = (wb, ws, data) => {
    const keys = Object.keys(data[0]);

    data.forEach((row, rowIndex) => {
        keys.forEach((cell, cellIndex) => {
            ws.cell(rowIndex + 2, cellIndex + 1).string(row[cell]).style(contentStyles(wb));
        });
    });
};


const createPrintPaymentsHeader = (wb, ws, cells) => {
    const keys = Object.keys(cells);
    ws.row(1).setHeight(40);
    keys.forEach((cell, index) => {
        if(index === 0) {
            ws.column(index + 1).setWidth(5);
        } else if (index === 1) {
            ws.column(index + 1).setWidth(10);
        } else if(index === 4 || index === 5) {
            ws.column(index + 1).setWidth(15);
        } else {
            ws.column(index + 1).setWidth(20);
        }

        ws.cell(1, index + 1).string(cell).style(printPaymentsHeaderStyles(wb));
    });
};

const createPrintPaymentsContent = (wb, ws, data) => {
    const keys = Object.keys(data[0]);

    data.forEach((row, rowIndex) => {
        keys.forEach((cell, cellIndex) => {
            if(cell === 'Հասցե' || cell === 'Ազգանուն') {
                ws.cell(rowIndex + 2, cellIndex + 1).string(row[cell]).style(contentStyles(wb));
            }else {
                ws.cell(rowIndex + 2, cellIndex + 1).number(parseFloat(row[cell])).style(contentStyles(wb));
            }

        });
    });
};

const createPrintPaymentsFooter = (wb, ws, data) => {
    const length = data.length;
    ws.row(length + 2).setHeight(35);
    const formalCell = (r, c) => {
        ws.cell(r, c).style(contentStyles(wb));
    };

    const value = data.reduce((accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue['Գումար']);
    }, 0);

    formalCell(length + 2, 1);
    formalCell(length + 2, 2);
    ws.cell(length + 2, 3).string('Ընդամենը').style(contentStyles(wb));
    formalCell(length + 2, 4);
    formalCell(length + 2, 5);
    ws.cell(length + 2, 6).number(value).style(contentStyles(wb));
    ws.cell(length + 5, 3).string('Գլխ. Հաշվապահ').style(contentStyles(wb));
    ws.cell(length + 5, 5).string('Շ. Բադիրյան').style(contentStyles(wb));

    formalCell(length + 4, 1);
    formalCell(length + 4, 2);
    formalCell(length + 4, 3);
    formalCell(length + 4, 4);
    formalCell(length + 4, 5);
    formalCell(length + 4, 6);

    formalCell(length + 5, 1);
    formalCell(length + 5, 2);
    formalCell(length + 5, 3);
    formalCell(length + 5, 4);
    formalCell(length + 5, 5);
    formalCell(length + 5, 6);

    formalCell(length + 6, 1);
    formalCell(length + 6, 2);
    formalCell(length + 6, 3);
    formalCell(length + 6, 4);
    formalCell(length + 6, 5);
    formalCell(length + 6, 6);

};

// TODO change excel filenames
const generateAndSendPaymentsExcel = (data, res) => {
    data = [
        {
            building: 'Avanesov 26',
            apartment: '32',
            name: 'Ashottt',
            date: 'esor',
            gumar: '50000045',
            and_hamar: '050605'
        }
    ];
    const wb = new xl.Workbook();

    const ws = wb.addWorksheet('vcharumner');

    createPaymentsHeader(wb, ws, data[0]);
    createPaymentsContent(wb, ws, data);

    wb.write('ExcelFile.xlsx', res);
};

const generateAndSendPrintPaymentsExcel = (data, res) => {

    data = data.map((d, i) => {
        return {
            'ՀՀ': i + 1,
            'Անդորագրի №': d.checkNumber,
            'Ազգանուն': d.resident.name,
            'Հասցե': d.resident.building.address,
            'Բնակ. №': d.resident.apartment,
            'Գումար': d.amount,
        };
    });

    const wb = new xl.Workbook();

    const ws = wb.addWorksheet('print-payments');

    createPrintPaymentsHeader(wb, ws, data[0]);
    createPrintPaymentsContent(wb, ws, data);
    createPrintPaymentsFooter(wb, ws, data);

    wb.write('ExcelFile.xlsx', res);
};

module.exports = { generateAndSendPaymentsExcel, generateAndSendPrintPaymentsExcel };
