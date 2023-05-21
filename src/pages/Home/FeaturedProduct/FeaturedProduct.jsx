
const FeaturedProduct = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Product</h2>
        <div className="flex items-center justify-center">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
            <img
              src="https://i.ibb.co/cvKmHTz/1170836-129193-ORJ3-YG-710.jpg"
              alt="Featured Product"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">LEGO Creator Expert Corner Garage</h3>
            <p className="text-gray-600 mb-4">
              Explore the world of automobiles with this highly detailed LEGO Creator Expert set.
            </p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
