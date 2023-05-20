import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
const Home = () => {
    return (
        <div className="pt-42">
                <Banner></Banner>
                <Gallery></Gallery>
                <Category></Category>
            </div>
    );
};

export default Home;