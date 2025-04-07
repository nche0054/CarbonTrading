import UserPortfolio from "../Data/UserPortfolio.json";

const PastTransactions = ({order}) => {
    if (order === false) {
    return (
        <div>
            {UserPortfolio.slice(0).reverse().map((item, i) => (
                <div className="overflow-y-auto" key={i}>
                    <div className="flex justify-between items-center w-[1270px] h-8 m-4 p-3 gap-2">
                        <div className="flex items-center text-lg font-normal text-gray-800 w-[365px] h-10 text-start overflow-clip">{item.name}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-32 h-10 text-center overflow-clip">{item.date}</div>
                        <div className="text-lg font-normal text-gray-800 w-52 h-10 pt-[6px] px-2 overflow-hidden text-center text-ellipsis whitespace-nowrap">{item.type}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-28 h-10 text-center overflow-clip">{item.status}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-40 h-10 text-center overflow-clip">{item.units}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-36 h-10 text-center overflow-clip">RM {item.price}</div>
                    </div>
                    <hr className="h-px w-[1255px] ml-6 bg-black border-1 dark:bg-black"></hr>
                </div>
            ))}
        </div>
    );}
    else {
        return (
            <div>
            {UserPortfolio.map((item, i)=>(
                <div className="overflow-y-auto">
                    <div className="flex justify-between items-center w-[1270px] h-8 m-4 p-3 gap-2">
                        <div className="flex items-center text-lg font-normal text-gray-800 w-[365px] h-10 text-start overflow-clip " >{item.name}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-32 h-10 text-center overflow-clip" >{item.date}</div>
                        <div className="text-lg font-normal text-gray-800 w-52 h-10 pt-[6px] px-2 overflow-hidden text-center text-ellipsis whitespace-nowrap">{item.type}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-28 h-10 text-center overflow-clip" >{item.status}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-40 h-10 text-center overflow-clip">{item.units}</div>
                        <div className="flex justify-center items-center text-lg font-normal text-gray-800 w-36 h-10 text-center overflow-clip">RM {item.price}</div>
                    </div>
                    <hr className="h-px w-[1255px] ml-6 bg-black border-1 dark:bg-black"></hr>
                </div>
            ))}
            </div>
        )
    }
}

export default PastTransactions;