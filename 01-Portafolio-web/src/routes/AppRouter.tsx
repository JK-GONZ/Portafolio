import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Contact from '../pages/Contact.tsx';
import NotFound from '../pages/NotFound.tsx';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
