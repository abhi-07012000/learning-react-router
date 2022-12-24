
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NAvbar from './Pages/NAvbar';
import OrderSumarry from './Pages/OrderSumarry';
import NoMatch from './Pages/NoMatch';
import Products from './Pages/Product';
import FeaturedProduacts from './Pages/FeaturedProduacts';
import NewProducts from './Pages/NewProducts';

function App() {
  return (<>
      <NAvbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='order-summury' element={<OrderSumarry />}/>

        <Route path='products' element= {<Products />} >
          <Route index element={<FeaturedProduacts />} />
          <Route path='featured' element= {<FeaturedProduacts />} />
          <Route path='new' element={<NewProducts />}/>  
        </Route>
        <Route path='*' element={<NoMatch /> }/>
      </Routes>
      </>
  );
}

export default App;
