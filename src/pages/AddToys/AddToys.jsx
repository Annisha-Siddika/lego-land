import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import bg from '../../assets/bg3.jpg';
import Swal from 'sweetalert2';

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    fetch('https://assignment-11-server-five-sable.vercel.app/addtoys', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Toy has been added successfully',
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
  };


  return (
    <div className="pt-44 pb-20 min-h-screen bg-cover" style={{ backgroundImage: `url('${bg}')` }}>
      <div className="flex items-center justify-center w-2/3 pr-2 md:max-w-sm mx-auto my-4 bg-white ">
        <img src="https://i.ibb.co/xgdq0TW/118823-add-product.gif" className="w-20" alt="" />
        <h2 className="text-2xl font-bold italic text-pink-500">Add A Toy</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto bg-yellow-100 p-5 md:p-10 rounded-lg border-2 border-purple-800">
        <div className="flex gap-4 md:gap-8 justify-between">
          <div className="mb-4 w-full">
            <label htmlFor="pictureUrl" className="block text-gray-700">Picture URL</label>
            <input type="text" id="pictureUrl" {...register('pictureUrl', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-gray-700">Toy Name</label>
            <input type="text" id="name" {...register('name', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block text-gray-700">Seller Name</label>
          <input type="text" id="sellerName" defaultValue={user.displayName} {...register('sellerName')} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block text-gray-700">Seller Email</label>
          <input type="email" id="sellerEmail" defaultValue={user.email} {...register('sellerEmail')} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="subCategory" className="block text-gray-700">Sub-category</label>
          <select id="subCategory" {...register('subCategory', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2">
            <option value="minecraft">Minecraft</option>
            <option value="architecture">Architecture</option>
            <option value="harrypotter">Harry Potter</option>
            <option value="starwar">Star War</option>
            <option value="legocity">Lego City</option>
          </select>
        </div>

        <div className="flex gap-4 md:gap-8 justify-between items-center">
          <div className="mb-4 w-full">
            <label htmlFor="price" className="block text-gray-700">Price</label>
            <input type="number" id="price" {...register('price', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="rating" className="block text-gray-700">Rating</label>
            <input type="number" id="rating" step="0.5" max="5" min="1" {...register('rating', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
            <input type="number" id="quantity" {...register('quantity', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
          </div>
        </div>



        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Detail Description</label>
          <textarea id="description" rows="4" {...register('description', { required: true })} className="w-full border-2 outline-none border-pink-500 rounded-md p-2" />
        </div>

        <button type="submit" className="btn btn-block bg-pink-500 hover:bg-pink-600 border-2 border-purple-900 text-yellow-200  ">+ Add A Toy</button>
      </form>
    </div>
  );
};

export default AddToys;