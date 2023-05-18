import bg from '../../../assets/bg.jpg'
const Home = () => {
    return (
        <div  className="bg-cover bg-center h-screen pt-44" style={{ backgroundImage: `url('${bg}')` }}>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;