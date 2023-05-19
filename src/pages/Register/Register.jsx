
import bg from '../../assets/bg2.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Register = () => {
    const [error, setError] = useState('');
    const {signUpUser, updateUserProfile} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        setError('')
         if(password.length < 6){
            setError('Password must be 6 characters or longer')
            return
        }

        signUpUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            form.reset();
            console.log(createdUser);
            return updateUserProfile(name, photo);
        })
        .then(() => {})
        .catch(error =>{
            setError(error.message);
        });


    };
    return (
        <div className="hero min-h-screen pt-44 pb-20"  style={{ backgroundImage: `url('${bg}')` }}>
            <div className="hero-content flex-col lg:flex-row md:gap-28">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-pink-500">Please Register</h1>
                    <div className='w-44 mx-auto'>
                    <img className='w-44 my-8' src='https://i.ibb.co/RBCVPKP/lego-man.png' alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                            name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                            name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                            name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"
                            name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                            <div className='text-center bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700 mt-6'>
                        <input  type="submit" value='Register' />
                        </div>
                    </form>
                    <p className='text-center pb-4'><small>Already have an account? Please <Link className='text-pink-600 font-semibold'  to='/login'>Login</Link> </small></p>
            <p className='text-error'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;