import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(https://source.unsplash.com/random/800x600)' }}>
          <div className="h-full flex items-center justify-center bg-opacity-50 bg-black">
            <h1 className="text-white text-4xl font-bold">Welcome to My Movie Collection</h1>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800">Discover and Manage Your Favorite Movies</h2>
          <p className="mt-4 text-gray-600">
            Browse through our collection of movies, add new ones, and manage your list effortlessly. Enjoy the best movie management experience with our platform.
          </p>
          <div className="mt-6 flex justify-center">
            <a href="/Film" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              Go to Movie List
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
