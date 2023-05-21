import { useEffect, useState } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-11-server-five-sable.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => {
            setToys(data)
            console.log(data)
        })
    },[])

    return (
        <div className="pt-40">
            <h2 className="text-xl md:text-2xl font-bold italic text-center py-8">All Toys</h2>
            <table className="w-11/12 mx-auto mb-20 border-b-8 border-pink-500">
                <thead className="bg-pink-500 text-white">
                    <tr>
                        <th className="px-4 py-2">Toy Photo</th>
                        <th className="px-4 py-2">Seller</th>
                        <th className="px-4 py-2">Toy Name</th>
                        <th className="px-4 py-2">Sub-category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Available Quantity</th>
                        <th className="px-4 py-2">View Details</th>
                    </tr>
                </thead>
                <tbody className="text-center font-semibold">
                    {toys.map((toy, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="px-4 py-2 w-28">
                                <img src={toy.pictureUrl} alt="" /></td>
                            <td className="px-4 py-2">{toy.sellerName}</td>
                            <td className="px-4 py-2">{toy.name}</td>
                            <td className="px-4 py-2">{toy.subCategory}</td>
                            <td className="px-4 py-2">{toy.price}</td>
                            <td className="px-4 py-2">{toy.quantity}</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;