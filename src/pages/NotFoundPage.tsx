import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>"
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a 
          href="/" 
          className="btn-primary"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;