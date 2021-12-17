import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProductById } from './redux/slices/product/product.asyncThunk';
import Routes from './components/routes/Routes';
function App() {
  const disptach = useDispatch();
  useEffect(()=>{
    disptach(getProductById('prod_O3bR5XBQgGwnzd'));
  },[disptach]);
  return (
    <Router>
      <Routes/>
    </Router>
    

  );
}

export default App;
