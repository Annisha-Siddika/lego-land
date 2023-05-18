import logo from '../../assets/lego-man.png'
import bg from '../../assets/bg2.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })

    }
    return (
        <div className="hero min-h-screen pt-44 pb-20"  style={{ backgroundImage: `url('${bg}')` }}>
            <div className="hero-content flex-col lg:flex-row md:gap-28">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-pink-500">Login now!</h1>
                    <div className='w-44 mx-auto'>
                    <img className='w-44 my-8' src={logo} alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                            name='email' 
                            placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                            name='password'
                             placeholder="Your Password" className="input input-bordered" />
                        </div>
                        <div className='text-center bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700 mt-6'><input type="submit" value='Login' /></div>
                    </form>
                    <p className='text-center pb-4'><small>New to LEGO Land? <Link className='text-pink-600 font-semibold' to='/register'> Create New Account</Link> </small></p>
            <p className='text-red-700 font-semibold'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;