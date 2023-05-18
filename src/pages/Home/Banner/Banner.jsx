import bg from '../../../assets/bg.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url('${bg}')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mt-8 mb-5 text-5xl font-bold italic text-pink-500 outline-double">Special Edition</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                        <button className="btn bg-pink-500 text-yellow-200 font-bold italic">Get Started</button>
                    </div>
                </div>
        </div>
    );
};

export default Banner;