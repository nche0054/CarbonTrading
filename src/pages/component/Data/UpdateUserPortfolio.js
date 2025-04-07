const fs = require('fs');
const path = require('path'); // Import path module

const projectTypeDict = {
    1: "Renewable Energy",
    2: "Energy Efficiency",
    3: "Forestry and Land Use",
    4: "Agricultural Land Management",
    5: "Waste Management",
    6: "Industrial Processes",
    7: "Transportation",
    8: "Blue Carbon"
};

const searchId = "SFqZK5ev";
const inputFile = path.join(__dirname, 'MarketTransactionData.json');
const outputFile = path.join(__dirname, 'UserPortfolio.json');
const totalsFile = path.join(__dirname, 'PortfolioData.json');

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    
    try {
        const transactions = JSON.parse(data);
        const newTransactions = transactions.filter(txn => txn["buyer_id"] === searchId || txn["seller_id"] === searchId)
            .map(txn => {
                const date = new Date(txn.timestamp);
                const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
                console.log(txn["buyer-id"])
                return {
                    date: formattedDate,
                    name: "Project RenewX Carbon", // Replace with actual project name
                    type: projectTypeDict[txn.project_type] || "Unknown",
                    status: txn["buyer_id"] === searchId ? "Purchased" : "Sold",
                    units: txn.carbon_transacted,
                    price: txn.settlement_price_rm
                };
            });
        fs.readFile(outputFile, 'utf8', (err, existingData) => {
            let existingTransactions = [];
            if (!err) {
                try {
                    existingTransactions = JSON.parse(existingData);
                    if (!Array.isArray(existingTransactions)) existingTransactions = [];
                } catch (parseError) {
                    console.error("Error parsing existing JSON:", parseError);
                }
            }
            
            const combinedTransactions = [...existingTransactions, ...newTransactions];
            
            fs.writeFile(outputFile, JSON.stringify(combinedTransactions, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                } else {
                    console.log("Filtered transactions appended to", outputFile);
                }
            });
        });

        fs.readFile(totalsFile, 'utf8', (err, totalsData) => {
            let totals = { totalBought: 0, totalSold: 0, totalProfit: 0 };
            if (!err) {
                try {
                    totals = JSON.parse(totalsData);
                    if (typeof totals !== 'object') totals = { totalBought: 0, totalSold: 0, totalProfit: 0 };
                } catch (parseError) {
                    console.error("Error parsing totals JSON:", parseError);
                }
            }
            
            // Update totals based on new transactions
            newTransactions.forEach(txn => {
                if (txn.status === "Purchased") {
                    totals.totalBought += txn.units;
                    totals.totalProfit -= txn.price;
                } else {
                    totals.totalSold += txn.units;
                    totals.totalProfit += txn.price;
                }
            });
            totals.totalBought = Math.round(totals.totalBought);
            totals.totalSold = Math.round(totals.totalSold);
            
            fs.writeFile(totalsFile, JSON.stringify(totals, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error("Error writing totals file:", err);
                } else {
                    console.log("Updated totals saved to", totalsFile);
                }
            });
        });
    } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
    }
});




