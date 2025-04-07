const fs = require("fs");
const path = require("path");
const { parse: parseCsv } = require("csv-parse");

const projectTypeDict = {
    "Renewable Energy": 1,
    "Energy Efficiency": 2,
    "Forestry and Land Use": 3,
    "Agricultural Land Management": 4,
    "Waste Management": 5,
    "Industrial Processes": 6,
    "Transportation": 7,
    "Blue Carbon": 8
};

const userID = "SFqZK5ev";
const csvFilePath = path.join(__dirname, "../Data/datav2.csv");
const jsonFilePath = path.join(__dirname, "../Data/BidsMade.json");

function loadBiddingData() {
    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
        return jsonData.bids || [];
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return [];
    }
}

function appendToCsv(data) {
    // append json data to csv file
    const csvStream = fs.createReadStream(csvFilePath).pipe(parseCsv({ columns: true, relax_column_count: true }));
    const newRows = [];
    csvStream.on("data", (row) => {
        const newRow = { ...row };
        if (newRow.userID === userID) {
            const bid = data.find((d) => d.projectID === newRow.projectID);
            if (bid) {
                newRow.biddingPrice = bid.biddingPrice;
            }
        }
        newRows.push(newRow);
    });
    csvStream.on("end", () => {
        const newCsvData = newRows.map((row) => {
            return `${row.projectID},${row.projectName},${row.projectType},${row.projectOwner},${row.biddingPrice}`;
        });
        fs.writeFileSync(csvFilePath, newCsvData.join("\n"));
        console.log("Bidding data appended successfully!");
    });
    // console.log("Bidding data appended successfully!");
}

const biddingData = loadBiddingData();
appendToCsv(biddingData);
