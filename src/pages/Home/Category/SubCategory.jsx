import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const SubCategory = ({category}) => {
    const {name, photo_url, price, ratings} = category;
    return (
        <div className="w-2/3 md:w-1/3 h-full bg-white bg-opacity-30 rounded-lg shadow-xl">
                <img src={photo_url} alt="lego set" className="w-full h-3/5 p-5 rounded" />
            
            <div className="px-4">
                <h2 className="text-xl font-bold">{name}</h2>
                    <div className="font-semibold py-2">Price: <span className="font-semibold text-green-700"> ${price}</span></div>
                    <div className='font-semibold text-slate-600 flex'>Ratings: <Rating style={{maxWidth: 100}} value={ratings} readOnly/></div>
                <div className="btn bg-pink-500 text-yellow-200 my-4 border-2 border-purple-800">
                    <button>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;