import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'
import CartWidget from '../CartWidget/CartWdiget';


const NavBar = () => {
    const {user, logout} = useUserContext();
    //Utilizar libreria y componente necesario para poder navegar entre las vistas.
    //Se debe mostrar CartWidget unicamente si hay un usuario loggeado
    //Si hay un usuario logueado cambiar el boton de Login por uno de Logout que limpie el estado global de usuario.

    return(
        <nav className='NavBar'>
            <h3>Ecommerce</h3>
            <div className='Categories'>            
                <NavLink to={'/'}><button className='Option'>Products</button></NavLink>
                <NavLink to={'/about'}><button className='Option'>About us</button></NavLink>
                { user ? <button className='Option' onClick={() => logout()}>Logout</button> : <NavLink to={'/login'}><button className='Option'>Login</button></NavLink>}
                { user && <CartWidget/>}
            </div>
        </nav>
    )
}

export default NavBar