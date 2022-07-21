import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './CartPage/CartPage';
import ALL from './Categories/All';
import Clothes from './Categories/Clothes';
import Tech from './Categories/Tech';
import Header from './Header/Header';
import Pdp from './PDP/Pdp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className='main'>
          <Routes>
            <Route path='/pdp/:productId' element={<Pdp />} />
            <Route path='/' element={<ALL index={0}/>} />
            <Route path='/all' element={<ALL index={0} />} />
            <Route path='/clothes' element={<Clothes index={1} />} />
            <Route path='/tech' element={<Tech index={2} />} />
            <Route path='/cart_page' element={<CartPage/>} />
          </Routes>
        </main>
      </div>
    );
  }

}


export default App;
