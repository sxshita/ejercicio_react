//imports
import { useState } from "react"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({handlePage}) => {   
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    
    //Componente contenedor encargado de la logica de estado
    //La consulta de productos debe realizarse a la siguiente api pasando el query param correspondiente
    //https://api.mercadolibre.com/sites/MLA/search?q=
   const buscarProductos = () => {
       fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
       .then(r => {
           return r.json()
       })
       .then(json => {
           setProducts(json.results)
       })
   }
    
    return (
        <div>
            <input type='text' value={search} onChange={({target}) => setSearch(target.value)} placeholder='buscar producto'></input>
            <input type='submit' onClick={() => buscarProductos()}></input>
            <h1>Listado de productos de MercadoLibre</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer