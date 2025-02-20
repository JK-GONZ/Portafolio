import { RouterProvider } from 'react-router-dom';
import { pagesData } from '../../pages/pagesData.tsx';
import React from 'react';

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center lg:w-5xl">
      <React.StrictMode>
        <RouterProvider router={pagesData} />
      </React.StrictMode>
    </div>
  );
}
