import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/home';
import SubCategory from '../pages/subCategory';
import ProductList from '../pages/productList';
import { AuthProvider } from '../pages/login';
import PrivateRoute from './privateRoute/PrivateRoute';
import  FORM_TYPE  from '../pages/login/login.constants';
import Login from '../pages/login';
import ProductView from '../pages/productView';
const FendyRoutes = () => {
    return (
        // <AuthProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login type={FORM_TYPE.LOGIN}/>}/>
                <Route path="/signup" element={<Login type={FORM_TYPE.SIGNUP}/>}/>
                <Route path="/subcategory" element={<SubCategory/>}/>
                <Route path="/search" element={<ProductList/>}/>
                <Route path="/product" element={<ProductView/>}/>
                {/* <PrivateRoute path='/cart' component={<ProductList/>}/> */}
            </Routes>
        // </AuthProvider>
    );
}

export default FendyRoutes;