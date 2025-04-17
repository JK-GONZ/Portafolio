import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import '../src/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <section className="mx-auto max-w-7/8 flex-1 justify-center py-8 md:px-12">
      <App />
    </section>
    <Footer />
  </BrowserRouter>,
);
