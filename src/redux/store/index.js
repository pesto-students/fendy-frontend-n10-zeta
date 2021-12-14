import {configureStore} from '@reduxjs/toolkit';
import Product from '../slices/product';

const store = configureStore({
    reducer: Product
});

export default store;
