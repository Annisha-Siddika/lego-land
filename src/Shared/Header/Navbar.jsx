import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const userName = user?.displayName;
    const userPic = user?.photoURL;

    const handleLogOut = () => {
        logOut()
            .then(result => { console.log(result) })
            .catch(error => { console.error(error) });
    }
    return (
        <div className="absolute top-0 bg-pink-200 bg-opacity-50 px-10 md:px-20 w-full">
            <div className='flex justify-between'>
                <div className=''>
                    <Link>
                        <img className='w-16' src={logo} alt="" /></Link>
                    <p className='text-xl text-purple-800 font-bold'>LEGO Land</p>
                </div>
                {
                    user ? <div className='flex items-center gap-8'>
                        {user.photoURL ?
                            <img className='w-12 h-12 rounded-full' src={userPic} title={userName} alt="" /> : <FaUserCircle title={userName} className='text-3xl text-pink-500 bg-yellow-200 rounded-full w-12 h-12'></FaUserCircle>
                        }
                        <button className='bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700' onClick={handleLogOut}>Log Out</button>
                    </div> : <>
                        <div className='flex items-center gap-8'>
                            <Link to='/login'>
                                <button className='bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700'>Log In</button></Link>
                            <Link to='/register'>
                                <button className='bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700 '>Register</button>
                            </Link>
                        </div>
                    </>
                }
            </div>
            <div className='flex justify-center gap-2 md:gap-8 py-4 mt-2 border-t-4 border-dashed'>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/'>Home</Link>
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/alltoys'>All Toys</Link>
                {
                    user && <>
                        <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/mytoys'>My Toys</Link>
                        <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/addtoys'>Add A Toy</Link>
                    </>
                }
                <Link className='font-bold italic text-pink-500 text-xs md:text-lg p-1 md:px-2 rounded-lg hover:bg-yellow-300 bg-yellow-200 ' to='/blogs'>Blogs</Link>
            </div>
        </div>
    );
};

export default Navbar;