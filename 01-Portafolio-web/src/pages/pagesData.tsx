import { App } from '@app/App.tsx';
import { About } from './About/index.tsx';
import { Home } from './Home/index.tsx';
import { createBrowserRouter } from 'react-router-dom';

export const pagesData = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);
