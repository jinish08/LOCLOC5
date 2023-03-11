const XLSX = require('xlsx');
const fs = require('fs');
const workbook = XLSX.readFile('UserData.xlsx');
const sheetName = workbook.SheetNames[0];
const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

console.log(sheetData);

fs.writeFileSync('output.json', JSON.stringify(sheetData, null, 2));
