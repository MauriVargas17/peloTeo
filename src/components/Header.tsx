import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-red-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/home' className="text-2xl font-semibold pl-4">PELOTEO</Link>
        <nav className="flex items-center">
          <Link to="admin_page" className='text-lg font-medium px-4'>Reservas Agendadas</Link>
          <Link to="/info" className='text-lg font-medium px-4'>Usuario</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
