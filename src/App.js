import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Auth App</h1>
      <div className="mt-4">
        <Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link> | 
        <Link to="/signup" className="text-indigo-600 hover:text-indigo-500"> Signup</Link>
      </div>
    </div>
  );
};

export default App;
