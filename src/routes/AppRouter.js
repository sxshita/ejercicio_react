import { Routes, Route} from 'react-router-dom';
import Login from '../components/Login/Login';
import About from '../components/About/About';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useUserContext } from '../context/UserContext';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Cart from '../components/Cart/Cart';

const AppRouter = () => {
  const { user } = useUserContext();

  console.log(user);
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer /> }/>
      <Route path='/about' element={<About/>}/>

      <Route element={<PublicRoute user={user} redirectPath='/'/>}>
        <Route path='/login' element={<Login/>} />
      </Route>

      <Route element={<PrivateRoute user={user} redirectPath='/login' />}>
        <Route path='/cart' element={<Cart/>} />
      </Route>
    </Routes>
  )
};

export default AppRouter;