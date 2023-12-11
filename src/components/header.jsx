
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className='nameLogo'>
        Marisa Miller
      </div>
      <div className='pages'> 
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
      </div>
    </div>
  );
}

export {Header};
