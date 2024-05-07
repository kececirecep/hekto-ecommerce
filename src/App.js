
import './App.css';
import Header from './components/Header/Header';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Featured from './Section/Featured/Featured';
import Hero from './Section/Hero/Hero';


function App() {
  return (
    <div>
      <HeaderBar/>
      <Header />
      <Hero/>
      <Featured/>
    </div>
  );
}

export default App;
