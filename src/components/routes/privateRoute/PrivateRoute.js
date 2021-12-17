import {Route,Navigate} from 'react-router-dom'
import { useAuth } from '../../pages/login';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useAuth(); 
    return (
        <Route
        {...rest}
        element={currentUser ? <Component/> : <Navigate to="/login"/>}
        />
    );
}

export default PrivateRoute;    