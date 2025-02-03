import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen text-center">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
                <p className="text-xl text-gray-600 mt-4">Sorry, the page you're looking for doesn't exist.</p>
                <Link to="/" className="text-blue-500 mt-4 block">Go back to Home</Link>
            </div>
        </div>
    );
};
