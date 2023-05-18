import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
   
    return (
        <div className="absolute top-0 bg-pink-200 bg-opacity-50 px-10 md:px-20 w-full">
            <div className='flex justify-between'>
                <div className=''>
                    <Link>
                    <img className='w-16' src={logo} alt="" /></Link>
                    <p className='text-xl text-purple-800 font-bold'>LEGO Land</p>
                </div>
                <div className='flex items-center gap-8'>
                    <Link to='/login'>
                    <button className='bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700'>Log In</button></Link>
                    <Link to='/register'>
                    <button className='bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700'>Register</button>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center gap-2 md:gap-8 py-4 mt-2 border-t-4 border-dashed'>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/'>Home</Link>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/alltoys'>All Toys</Link>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/mytoys'>My Toys</Link>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/addtoy'>Add A Toy</Link>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/blogs'>Blogs</Link>
            </div>
        </div>
    );
};

export default Navbar;