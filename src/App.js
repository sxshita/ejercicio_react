import React from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './routes/AppRouter';
import { UserContext } from './context/UserContext';

const App = () => {
  //Routear app

  //Siempre debe mostrarse el NavBar
  //En '/' debe mostrarse el listado de productos
  //En '/about' debe mostrarse el componente About
  //En '/login' debe mostrase el formulario de Login

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext>
          <NavBar />
          <AppRouter/>
        </UserContext>
      </BrowserRouter>
    </div>    
  );
}

export default App;
