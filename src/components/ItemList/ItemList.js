import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    //Componente encargado de visualizar la lista de productos
    
    return (
        <ul className='ListGroup'>
            {products.map(prod => {
                return (
                    <Item key={prod.id} id={prod.id} title={prod.title} thumbnail={prod.thumbnail} category_id={prod.category_id} price={prod.price}/>
                )
            })}
        </ul>
    )
}

export default ItemList