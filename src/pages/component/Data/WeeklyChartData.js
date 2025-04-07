export const WeeklyBiddingStats = {
    labels: ["24/12", "25/12", "26/12", "27/12", "28/12", "29/12", "30/12"],
    datasets: [
        {
            label: 'Average Bidding Price',
            data: [3.8, 3.1, 3.5, 3.65, 3.05, 3.05, 3.3],
            fill: false,
            backgroundColor: '#EEB264',
            borderColor: '#EEB264',
        },{
            label: 'Average Offering Price',
            data: [1.6, 1.72, 1.33, 1.35, 1.6, 1.7, 2.0],
            fill: false,
            backgroundColor: '#337EFF',
            borderColor: '#337EFF',
        },{
            label: 'Own Bidding Price',
            data: [3.0, 3.4, 3.35, 3.3, 3.2, 3.0, 3.1],
            fill: false,
            backgroundColor: '#AEE95B',
            borderColor: '#AEE95B',
        },{
            label: 'Own Offering Price',
            data: [2.5, 1.5, , , 2.0, 1.9, 2.2],
            fill: false,
            backgroundColor: '#6D0C8B',
            borderColor: '#6D0C8B',
        }
        
    ],
};

export function updateChartData(chartData, newLabel, newData) {
    // Remove the first element to keep the dataset length consistent
    chartData.labels.shift();  
    chartData.labels.push(newLabel);  

    // Loop through each dataset and update its data
    newData.forEach((value, index) => {
        chartData.datasets[index].data.shift();  // Remove the first entry
        chartData.datasets[index].data.push(value);  // Add the new entry
    });
}
