import React from 'react';

export default function Loading() {
  return (
    <div className="my-10 border border-gray-300 shadow rounded-md p-6 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <span className="animate-ping h-5 w-5 rounded-full bg-gray-400 opacity-75" />
        <span className="ml-4">Loading...</span>
      </div>
    </div>
  );
}
