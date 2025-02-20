import { About } from './About/index.tsx';
import { Home } from './Home/index.tsx';
import { Error } from './Error/index.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { Nav } from '@components/Nav/Nav.tsx';
import { Footer } from '@components/Footer/Footer.tsx';

export const pagesData = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        {' '}
        <Nav />
        <Home />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Nav />
        <Error />
        <Footer />
      </>
    ),
  },
  {
    path: 'home',
    element: (
      <>
        {' '}
        <Nav />
        <Home />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Nav />
        <Error />
        <Footer />
      </>
    ),
  },
  {
    path: 'about',
    element: (
      <>
        {' '}
        <Nav />
        <About />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Nav />
        <Error />
        <Footer />
      </>
    ),
  },
]);
