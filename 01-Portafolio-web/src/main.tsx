import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { pagesData } from './pages/pagesData.tsx';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <main className="flex min-h-screen min-w-screen flex-col items-center overflow-visible bg-(--background-color) p-0 text-center font-sans text-(--text-color)">
    <Analytics /> <SpeedInsights />
    <React.StrictMode>
      <RouterProvider router={pagesData} />
    </React.StrictMode>
  </main>,
);
