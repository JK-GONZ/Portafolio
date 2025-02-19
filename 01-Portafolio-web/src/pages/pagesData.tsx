import { App } from '@app/App.tsx';
import { About } from './About/index.tsx';
import { Home } from './Home/index.tsx';
import { Error } from './Error/index.tsx';
import { createBrowserRouter } from 'react-router-dom';

export const pagesData = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: 'home',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'about',
    element: <About />,
    errorElement: <Error />,
  },
]);
