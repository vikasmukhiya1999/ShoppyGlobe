import { Link } from "react-router-dom";

const NotFound = ({
  message = "Oops! Page not found",
  buttonText = "Go Home",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <p className="text-xl text-gray-600">{message}</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
