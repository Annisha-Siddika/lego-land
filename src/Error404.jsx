import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src='https://i.ibb.co/cy1qVbq/error.gif'
        alt="Error 404"
        className="w-96"
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Page not found.</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-pink-500 hover:bg-pink-600 text-yellow-200 font-bold py-2 px-4 rounded border-2 border-purple-800"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
