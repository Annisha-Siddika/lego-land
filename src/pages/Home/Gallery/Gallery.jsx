import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.avif';
import img5 from '../../../assets/img5.jpeg';
import img6 from '../../../assets/img6.jpg';
const Gallery = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    return (
        <div className='bg-pink-500'>
            <h2 className='text-center py-8 text-4xl font-extrabold italic text-yellow-200'>Exclusive Previews</h2>
            <p className='text-center px-14 md:px-28 pb-14 text-white italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id numquam, hic doloremque dolores suscipit illo, magni autem dolorum expedita perspiciatis recusandae laudantium non delectus praesentium, laboriosam explicabo sit consectetur et?</p>
            <div className='md:flex justify-center gap-12'>
                <div className='card w-96 glass'>
                    <img className='w-full h-3/5 rounded-t-xl' data-aos="fade-right" src={img1} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Pyramid lego</h2>
                        <p>Create your lego architecture</p>

                    </div>
                </div>
                <div className='card w-96 glass mt-8 md:mt-0'>
                    <img className='w-full h-3/5 rounded-t-xl' data-aos="fade-left" src={img2} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Building lego</h2>
                        <p>Create your lego architecture</p>

                    </div>
                </div>

            </div>
            <div className='md:flex justify-evenly pt-8'>
                <div className='card w-96 glass'>
                    <img className='w-full h-3/5 rounded-t-xl' data-aos="fade-up" src={img3} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Star war lego</h2>
                        <p>Create your Star war</p>
                    </div>
                </div>
                <div className='card w-96 glass mt-8 md:mt-0'>
                    <img className='w-full h-3/5 rounded-t-xl' data-aos="fade-up" src={img4} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Star war lego</h2>
                        <p>Create your Star war</p>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-around py-8'>
            <div className='card w-96 glass'>
                    <img className='w-full h-3/5 rounded-t-xl' data-aos="fade-down-left" src={img5} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Lego City</h2>
                        <p>Create your mini lego city</p>
                    </div>
                </div>
                <div className='card w-96 glass mt-8 md:mt-0'>
                    <img className='w-full h-3/5 rounded-t-xl' data-aos="fade-down-right" src={img6} alt="" />
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