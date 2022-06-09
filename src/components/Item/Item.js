import { useUserContext } from '../../context/UserContext'
import { NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const ItemDetail = ({ id, title, thumbnail, category_id, price }) => {
    const {user} = useUserContext()
    //Componente encargado de mostrar el detalle de productos

    //Debe mostrarse el contador unicamente si hay un usuario logueado.
    //Sino esta logueado mostrar un boton que vaya al formulario de Login

    //Al hacer click en "Agregar al carrito" dentro del contador 
    //se debe ejecutar un funcion que muestre en consola nombre de producto y cantidad agregada.

    const onAdd = (count) => {
        console.log(`producto: ${title} cantidad: ${count}`);
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={thumbnail} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    CategoriaId: {category_id}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {user ? <ItemCount onAdd={onAdd}/> : <NavLink to={'/login'}><button className='Option'>Login</button></NavLink>}
            </footer>
        </article>
    )
}

export default ItemDetail