import { createRoot } from 'react-dom/client';
// import App from '@components/App/App.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <div className="m-0 flex h-dvh w-dvw flex-col items-center justify-center overflow-visible bg-(--background-color) p-0 text-center font-sans text-(--text-color)">
    <Analytics />
    {/* <App /> */}
    <h1 className="text-4xl">In progress...</h1>
  </div>,
);
