import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { App } from '@app/App.tsx';


import './index.css';

createRoot(document.getElementById('root')!).render(
  <main className="flex h-full min-h-screen flex-col items-center overflow-visible bg-(--background-color) text-center font-sans text-(--text-color)">
    <Analytics /> <SpeedInsights />
    <App />
  </main>,
);
