import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ user, redirectPath, children }) => {

    if(!user) {
        return <Navigate to={redirectPath} replace/>
    };

    return children ? children : <Outlet/>

};

export default PrivateRoute;