import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.tsx';

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-[--background] py-4 shadow-md">
      <h1>
        <Link to="/" className="hover:text-accent text-2xl font-bold">
          <img src="https://github.com/JK-GONZ.png" className='w-12 rounded-4xl'/>
        </Link>
      </h1>
      <ThemeToggle />
      <nav className="flex justify-around gap-6">
        
        <Link to="/contact" className="hover:text-accent">
          Contact
        </Link>
      </nav>
    </header>
  );
}
