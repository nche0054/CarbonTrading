import {Link, NavLink} from 'react-router-dom';
import {FaPen , FaTrash} from 'react-icons/fa';

const BidsMadeCard = ({bids}) => {

    const deleteBid = ({bidID}) => {
        fetch('http://localhost:8000/bids/' + bidID, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
            NavLink('/');
        })
    }
    return (
        <>
            {bids.map((bid) => (
                <div className="flex justify-start items-center text-gray-700 font-normal p-2" key={bid.id}>
                    <div className="w-16 h-7 mr-3 ">{bid.bidType}</div>
                    <div className="w-36 h-7 mr-3 truncate">{bid.projectType}</div>
                    <div className="flex w-28 h-7 mr-5   justify-end truncate">{bid.CarbonCredits} kgCO₂e</div>
                    <div className="w-20 h-7 mr-1">RM {bid.unitPrice.toFixed(2)}</div>
                    <Link to={`/editbid/${bid.id}`} className="mr-4">
                        <button className=" mr-4"><FaPen/></button>
                    </Link>
                    <button onClick={() => deleteBid({ bidID: bid.id })}><FaTrash/></button>
                </div>
            ))}
        </>
    )
}

export default BidsMadeCard