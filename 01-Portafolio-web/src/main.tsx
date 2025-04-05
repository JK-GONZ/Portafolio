import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <main className="bg-[--background] text-(--foreground)">
    <Analytics /> <SpeedInsights />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </main>,
);
