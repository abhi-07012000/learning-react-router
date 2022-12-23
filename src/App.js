
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NAvbar from './Pages/NAvbar';
import OrderSumarry from './Pages/OrderSumarry';
import NoMatch from './Pages/NoMatch';

function App() {
  return (<>
      <NAvbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='order-summury' element={<OrderSumarry />}/>
        <Route path='*' element={<NoMatch /> }/>
      </Routes>
      </>
  );
}

export default App;
