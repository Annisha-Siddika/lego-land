import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";


const AddToys = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {user} =useContext(AuthContext);

    return (
        <div className="pt-44">

<form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="pictureUrl">Picture URL</label>
        <input type="text" id="pictureUrl" {...register('pictureUrl', {required: true})} />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name', {required: true})} />
      </div>

      <div>
        <label htmlFor="sellerName">Seller Name</label>
        <input type="text" id="sellerName" defaultValue={user.displayName} {...register('sellerName')} />
      </div>

      <div>
        <label htmlFor="sellerEmail">Seller Email</label>
        <input type="email" id="sellerEmail" defaultValue={user.email} {...register('sellerEmail')} />
      </div>

      <div>
        <label htmlFor="subCategory">Sub-category</label>
        <select id="subCategory" {...register('subCategory', {required: true})}>
          <option value="minecraft">Minecraft</option>
          <option value="architecture">Architecture</option>
          <option value="harrypotter">Harry Potter</option>
        </select>
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" {...register('price', {required: true})} />
      </div>

      <div>
        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" step="0.1" {...register('rating', {required: true})} />
      </div>

      <div>
        <label htmlFor="quantity">Available Quantity</label>
        <input type="number" id="quantity" {...register('quantity', {required: true})} />
      </div>

      <div>
        <label htmlFor="description">Detail Description</label>
        <textarea id="description" rows="4" {...register('description')} />
      </div>

      <button type="submit">Add the Toy</button>
    </form>
        </div>
    );
};

export default AddToys;