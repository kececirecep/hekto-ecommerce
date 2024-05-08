
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderBar from './components/HeaderBar/HeaderBar';
import LeatestBlog from './Section/Home/Blog/LeatestBlog';
import Brands from './Section/Home/Brands/Brands';
import Discount from './Section/Home/Discount/Discount';
import Featured from './Section/Home/Featured/Featured';
import Hero from './Section/Home/Hero/Hero';
import Leatest from './Section/Home/Leatest/Leatest';
import Newslater from './Section/Home/Newslater/Newslater';
import ShopexOffer from './Section/Home/ShopexOffer/ShopexOffer';
import Trending from './Section/Home/Trending/Trending';
import Unique from './Section/Home/Unique/Unique';


function App() {
  return (
    <div>
      <HeaderBar />
      <Header />
      <Hero />
      <Featured />
      <Leatest />
      <ShopexOffer />
      <Unique />
      <Trending />
      <Discount />
      <Newslater />
      <Brands/>
      <LeatestBlog/>
      <Footer/>
    </div>
  );
}

export default App;
