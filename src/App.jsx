import './App.css';
import Hero from './components/Hero';
import ListProduct from './components/ListProduct';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="reset">
      <Navbar />
      <Hero />
      <ListProduct />
    </div>
  );
}

export default App;
