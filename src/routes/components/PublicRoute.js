import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ user, redirectPath, children }) => {
    console.log(user);
    if(user) {
        return <Navigate to={redirectPath} replace/>
    };

    return children ? children : <Outlet/>

}

export default PublicRoute;