
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";


const SingleToy = () => {
    const { pictureUrl, name, sellerName, sellerEmail, price, rating, quantity, description  } = useLoaderData();

    return (
        <div className="pt-40">
            <div className="bg-yellow-200 m-16 md:m-20 p-4 rounded-3xl border-8 border-double border-pink-400 outline-8 outline-double outline-purple-900 md:flex gap-4 items-center">
                <img src={pictureUrl} className="rounded-xl shadow-2xl shadow-yellow-950" alt="" />
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-pink-500 pb-2">{name}</h2>
                    <p className="font-semibold text-slate-600">Seller Name: <span className="font-semibold text-blue-900"> {sellerName}</span></p>
                    <p className="font-semibold text-slate-600">Seller Email: <span className="font-semibold text-blue-900">{sellerEmail}</span></p>
                    <div className="font-semibold text-slate-600 py-2">Price: <span className="font-semibold text-green-700"> ${price}</span></div>
                    <div className='font-semibold text-slate-600 flex'>Ratings: <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    </div>
                    <div className="font-semibold text-slate-600 py-2">Available Quantity: <span className="font-semibold text-red-700"> {quantity}</span></div>
                    <p className="py-4 text-purple-900 font-semibold italic">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
