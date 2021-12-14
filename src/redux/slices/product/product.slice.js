import { createSlice } from "@reduxjs/toolkit";
import { getProductById } from './product.asyncThunk';



const Product = createSlice({
  name: "product",
  initialState: {
    currentProduct: {},
    productList: [],
    similarProducts: {},
    fetchStatus: "",
  },
  reducers: {
      updateCurrentProduct:(state,action)=>{
          state.currentProduct = action.payload;
      },
      setProductList:(state,action)=>{
          state.productList = action.payload;
      },
      addProductToList: (state,action)=>{
          state.productList = [...state.productList, action.payload]
      },
      setSimilarProducts: (state,action)=>{
          state.similarProducts = action.payload;
      }

  },
  extraReducers:{
      [getProductById.pending]: (state,action)=>{
          state.fetchStatus =  'loading'
      },
      [getProductById.fulfilled]: (state,action)=>{
          state.currentProduct = action.payload;
          state.fetchStatus = 'success'
      },
      [getProductById.rejected]: (state,action) => {
          state.fetchStatus = 'failed'
      }
  }
});

export const {updateCurrentProduct,addProductToList,setProductList,setSimilarProducts } = Product.actions;
export default Product.reducer;