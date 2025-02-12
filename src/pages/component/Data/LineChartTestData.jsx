export const BiddingStatsTest = {
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
            data: [1.6, 1.72, 1.33, 1.35, 1.6, 1.7, 2.6],
            fill: false,
            backgroundColor: '#337EFF',
            borderColor: '#337EFF',
        }
    ],
};


export const PastTradesTest = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: 'Renewable Energy',
            data: [180000, 168000, 176000, 179000, 189000, 160000, 179800, 180000, 184000, 197500, 190000, 191000],
            fill: false,
            backgroundColor: '#00AEFF',
            borderColor: '#00AEFF',
        },{
            label: 'Forestry and Land Use',
            data: [67000, 45000, 34000, 78500, 80000, 128600, 137500, 108000, 120000, 158000, 165400, 161000],
            fill: false,
            backgroundColor: '#32B18B',
            borderColor: '#32B18B',
        },{
            label: 'Energy Efficiency',
            data: [130000, 134000, 129900, 137000, 116400, 120000, 140000, 157600, 139900, 137000, 137100, 145000],
            fill: false,
            backgroundColor: '#E742FD',
            borderColor: '#E742FD',
        },{
            label: 'Blue Carbon',
            data: [22000, 21200, 20700, 22400, 40000, 39000, 30100, 39900, 24000, 30000, 20800, 20800],
            fill: false,
            backgroundColor: '#4565B7',
            borderColor: '#4565B7',
        },{
            label: 'Waste Management',
            data: [60000, 82000, 89700, 58500, 71000, 82000, 108000, 119000, 109000, 80000, 81200, 80000],
            fill: false,
            backgroundColor: '#9D6145',
            borderColor: '#9D6145',
        },{
            label: 'Agricultural Land Management',
            data: [31000, 34500, 40000, 22300, 30000, 44000, 41300, 40780, 38900, 40000, 40600, 42500],
            fill: false,
            backgroundColor: '#FF7500',
            borderColor: '#FF7500',
        },{
            label: 'Transportation',
            data: [109700, 120400, 151000, 159900, 157700, 157000, 148600, 139000, 117800, 123000, 140700, 131600],
            fill: false,
            backgroundColor: '#D9B5B5',
            borderColor: '#D9B5B5',
        }
    ]
};