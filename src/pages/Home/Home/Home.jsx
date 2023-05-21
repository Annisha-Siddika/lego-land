import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Gallery from '../Gallery/Gallery';
const Home = () => {
    return (
        <div className="pt-42">
                <Banner></Banner>
                <Gallery></Gallery>
                <Category></Category>
                <About></About>
                <FeaturedProduct></FeaturedProduct>
            </div>
    );
};

export default Home;