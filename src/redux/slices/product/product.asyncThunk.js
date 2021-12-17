import {createAsyncThunk} from '@reduxjs/toolkit'
import {commerce} from '../../../services/commerce'


export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (productId,getState) => {
        return commerce.products.retrieve(productId); 
    }
);