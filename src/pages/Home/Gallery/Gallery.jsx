
const Gallery = () => {
    return (
        <div>
            <h2></h2>
            <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Gallery Image"
                        className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
                            View Details
                        </button>
                    </div>
                </div>
                {/* Add more gallery items here */}
            </div>

        </div>
    );
};

export default Gallery;