import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './componetns/CartPage/CartPage';
import All from './componetns/Categories/All';
import Clothes from './componetns/Categories/Clothes';
import Tech from './componetns/Categories/Tech';
import Header from './componetns/Header/Header';
import Pdp from './componetns/PDP/Pdp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className='main'>
          <Routes>
            <Route path='/pdp/:productId' element={<Pdp />} />
            <Route path='/' element={<All index={0}/>} />
            <Route path='/all' element={<All index={0} />} />
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
