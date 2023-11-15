import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className='nombre-ecommerce'>YessAnime</Link>
            <ul>
                <NavLink to={`/categoria/remeras`} className='nav-categoria-links'>Playeras</NavLink>
                <NavLink to={`/categoria/buzos`} className='nav-categoria-links'>Mangas</NavLink>
                <NavLink to={`/categoria/pantalones`} className='nav-categoria-links'>Cosplays</NavLink>
                <NavLink to={`/categoria/gafas`} className='nav-categoria-links'>Posters</NavLink>
                <NavLink to={`/cart`} className='nav-categoria-links-cart'><CartWidget /></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;