import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { Clapperboard} from 'lucide-react';
import { SquareUser} from 'lucide-react';


const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-around">
          <li><Link to="/" className="hover:underline"><House size={44} strokeWidth={2.75} /></Link></li>
          <li><Link to="/film" className="hover:underline"><Clapperboard size={44} strokeWidth={2.75} /></Link></li>
          <li><Link to="/contact" className="hover:underline"><SquareUser size={44} strokeWidth={2.75} /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
