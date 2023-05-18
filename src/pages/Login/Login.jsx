import logo from '../../assets/lego-man.png'
const Login = () => {
    return (
        <div className="hero min-h-screen pt-44 pb-20">
            <div className="hero-content flex-col lg:flex-row md:gap-28">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-pink-500">Login now!</h1>
                    <div className='w-44 mx-auto'>
                    <img className='w-44 my-8' src={logo} alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className='bg-pink-500 px-2 py-1 rounded-lg border-2 font-bold italic text-yellow-200 hover:bg-pink-600 border-purple-700'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;