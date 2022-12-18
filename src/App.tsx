import React from 'react';
import './App.css';
import CheckDeliveryAddress from './components/forms/CheckDeliveryAddress/CheckDeliveryAddress';
import Categories from './components/NavBars/Categories/Categories';
import Combos from './components/NavBars/Comobos/Combos';
import GroupedProducts from './components/Products/GroupedProducts/GroupedProducts';
import SeoTextContainer from './components/SeoTextContainer/SeoTextContainer';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import { useAppSelector } from './store/store';

function App() {

  const {products} = useAppSelector(state=>state.productsSlice)


  return (
    <div className="App">
      <Header />
      <main>
        <Categories />
        <Combos />
        <CheckDeliveryAddress />
        <GroupedProducts title={"Пицца"} products={products} loading={false} err="" />
        <SeoTextContainer />
        <Footer />
      </main>
    </div>
  );
}

export default App;
