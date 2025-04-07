import json
import csv
import datetime

# Dictionary to map projectType strings to numbers
projectTypeDict = {
    "Renewable Energy": 1,
    "Energy Efficiency": 2,
    "Forestry and Land Use": 3,
    "Agricultural Land Management": 4,
    "Waste Management": 5,
    "Industrial Processes": 6,
    "Transportation": 7,
    "Blue Carbon": 8
}

# File paths
json_file_path = r"C:\Users\ASUS\OneDrive - Monash University\Back ups\Desktop\FYP Webpage\carbontrading\src\pages\component\Data\BidsMade.json"
csv_file_path =  r"C:\Users\ASUS\OneDrive - Monash University\FYP\MyEthereumProject\Data\datav2.csv"
user_id = "SFqZK5ev"

def load_bidding_data():
    try:
        with open(json_file_path, "r", encoding="utf-8") as file:
            data = json.load(file)
        return data.get("bids", [])
    except Exception as e:
        print("Error reading JSON file:", e)
        return []

def append_to_csv(data):
    file_exists = False
    try:
        with open(csv_file_path, "r", encoding="utf-8") as file:
            file_exists = True
    except FileNotFoundError:
        pass
    
    with open(csv_file_path, "a") as file:
        writer = csv.writer(file)
        
        if not file_exists:
            writer.writerow(["Timestamp", "User ID", "Type", "Carbon Units", "Unit Price", "Total Price", "Project Type"])
        
        newdata = []
        for bid in data:
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            project_type = projectTypeDict.get(bid["projectType"], "Unknown")
            total_price = bid["CarbonCredits"] * bid["unitPrice"]
            
            newdata.append([timestamp, user_id, bid["bidType"], bid["CarbonCredits"], bid["unitPrice"], total_price, project_type])
        # print(newdata)
        writer.writerows(newdata)
    print("Bidding data appended successfully!")

def clear_bidding_data():
    with open(json_file_path, "w") as file:
        json.dump({"bids": []}, file)
    print("Bidding data cleared successfully!")

if __name__ == "__main__":
    bidding_data = load_bidding_data()
    append_to_csv(bidding_data)
    clear_bidding_data()
