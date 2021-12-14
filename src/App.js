import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ProductView from './components/pages/productView';
import { getProductById } from './redux/slices/product/product.asyncThunk';
function App() {
  const currentProduct = useSelector(state => state.currentProduct);
  const status = useSelector(state => state.fetchStatus);
  console.log(status);
  const disptach = useDispatch();
  useEffect(()=>{
    disptach(getProductById('prod_O3bR5XBQgGwnzd'));
  },[disptach]);
  return (
    <ProductView status={status} product={currentProduct}/>

  );
}

export default App;
