import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        }); // Initialize AOS
    }, []);

    return (
        <div className='bg-pink-500'>
            <h2 className='text-center py-8 text-4xl font-extrabold italic text-yellow-200'>Exclusive Previews</h2>
            <p className='text-center px-14 md:px-28 pb-14 text-white italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id numquam, hic doloremque dolores suscipit illo, magni autem dolorum expedita perspiciatis recusandae laudantium non delectus praesentium, laboriosam explicabo sit consectetur et?</p>
            <div className='md:flex justify-center gap-12'>
                <div data-aos="fade-right" className='card w-96 glass'>
                    <img className='w-full h-3/5 rounded-t-xl' src='https://i.ibb.co/FVhR3Pj/img1.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Pyramid lego</h2>
                        <p>Create your lego architecture</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='card w-96 glass mt-8 md:mt-0'>
                    <img className='w-full h-3/5 rounded-t-xl' src='https://i.ibb.co/tqTcBjr/img2.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Building lego</h2>
                        <p>Create your lego architecture</p>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-evenly pt-8'>
                <div data-aos="fade-up" className='card w-96 glass'>
                    <img className='w-full h-3/5 rounded-t-xl' src='https://i.ibb.co/fGnSvPL/img3.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Star war lego</h2>
                        <p>Create your Star war</p>
                    </div>
                </div>
                <div data-aos="fade-up" className='card w-96 glass mt-8 md:mt-0'>
                    <img className='w-full h-3/5 rounded-t-xl' src='https://i.ibb.co/pf4SWDY/img4.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Star war lego</h2>
                        <p>Create your Star war</p>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-around py-8'>
                <div data-aos="fade-down-left" className='card w-96 glass'>
                    <img className='w-full h-3/5 rounded-t-xl' src='https://i.ibb.co/kc85H3f/img5.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Lego City</h2>
                        <p>Create your mini lego city</p>
                    </div>
                </div>
                <div data-aos="fade-down-right" className='card w-96 glass mt-8 md:mt-0'>
                    <img className='w-full h-3/5 rounded-t-xl' src='https://i.ibb.co/82CwVwd/img6.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Lego City</h2>
                        <p>Create your biggest lego city</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Gallery;