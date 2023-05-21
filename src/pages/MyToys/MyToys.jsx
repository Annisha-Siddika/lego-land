import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const {user} =useContext(AuthContext);
    const showAlert =() =>{
        Swal.fire({
            title: 'You have to log in first to view details',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
    }
    useEffect(()=>{
        fetch(`https://assignment-11-server-five-sable.vercel.app/mytoys/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[user])
    useEffect(() => {
        fetchToys();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [sortOrder]); 
    
      const fetchToys = async () => {
        try {
          const response = await fetch(`/mytoys/${user.email}?sort=${sortOrder}`);
          const data = await response.json();
          setToys(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleSortChange = (e) => {
        setSortOrder(e.target.value);
      };
    return (
        <div className="pt-40">
            <div className="mb-4">
        <label className="mr-2">Sort Order:</label>
        <select value={sortOrder} onChange={handleSortChange} className="border-2 outline-none border-pink-500 rounded-md p-2">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
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
                            <td className="px-4 py-2">{toy.price}</td>
                            <td className="px-4 py-2">{toy.name}</td>
                            <td className="px-4 py-2">
                            <button className="btn bg-pink-500 text-yellow-200 my-4 border-2 border-purple-800">Update</button>
                            </td>
                            <td className="px-4 py-2">
                            <button className="btn bg-pink-500 text-yellow-200 my-4 border-2 border-purple-800">Delete</button>
                            </td>
                            <td className="px-4 py-2">
                            
                    <Link to={`/singletoy/${toy._id}`} className="btn bg-pink-500 text-yellow-200 my-4 border-2 border-purple-800" onClick={showAlert}>View Details</Link>
                    
               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;