const xl = require('excel4node');



const createHeader = (wb, ws, data) => {

};

const createContent = (wb, ws, data) => {

};

const createFooter = (wb, ws, data) => {

};

const generateAndSendTCountExcel = (data, res) => {

    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('t-count');

    createHeader(wb, ws, data[0]);
    createContent(wb, ws, data);
    createFooter(wb, ws, data);

    wb.write('ExcelFile.xlsx', res);
};

module.exports = generateAndSendTCountExcel;