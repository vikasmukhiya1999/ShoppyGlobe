const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500 mx-auto"></div>
        <p className="mt-4 text-silver-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
