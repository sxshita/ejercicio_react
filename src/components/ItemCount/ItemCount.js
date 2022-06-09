import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({onAdd})=> {
    const [count, setCount] = useState(1);
   //Componente encargado de seleccionar cantidad de productos a agregar.

   //La funcion recibida por props en ejecutada al hacer click en el boton,
   //Esa funcion debe recibir como parametro la cantidad seleccionada.

    const decrement = () => {
        if(count > 1){
        setCount(count - 1);
        };
    };

  const increment = () => {
    setCount(count + 1);
  }

  

   return(
       <div className='Counter'>          
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button className="Button" onClick={() => decrement()}>-</button>
                <h4 className='Number'>{count}</h4>
                <button className="Button" onClick={() => increment()}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount