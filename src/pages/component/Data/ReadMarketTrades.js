const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path'); // Import path module

// Read Excel File
const workbook = XLSX.readFile("C:/Users/ASUS/OneDrive - Monash University/FYP/MyEthereumProject/PoSo/Output/TransactionData_V2.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON
const jsonData = XLSX.utils.sheet_to_json(sheet);

// Define the save path in the current directory
const savePath = path.join(__dirname, 'MarketTransactionData.json'); // Save in current directory

// Save JSON file
fs.writeFileSync(savePath, JSON.stringify(jsonData, null, 2));

console.log("JSON file saved successfully at:", savePath);