import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter } from 'react-router';
import { Router } from './pages/router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <main className="m-0 flex h-dvh w-dvw flex-col items-center justify-center overflow-visible bg-(--background-color) p-0 text-center font-sans text-(--text-color)">
    <Analytics /> <SpeedInsights />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </main>,
);
