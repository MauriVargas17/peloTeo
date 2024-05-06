import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-red-600 text-white py-4">
      <div className="container mx-auto flex">
        <Link to='/home' className="text-2xl font-semibold pl-4 w-32">Peloteo</Link>
        <Link to="admin_page" className='text-2xl font-semibold pl-4 w-auto'>Reservas Agendadas</Link>
        <Link to="/info" className='text-2xl font-semibold pl-8 w-auto'>Usuario</Link>
      </div>
    </header>
  );
}

export default Header;
