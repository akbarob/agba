
import './App.css';
import Info from './Components/Info';
import About from './Components/About';
import Interest from './Components/Interest';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='main-body mx-auto py-3 '>
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </div>

  );
}

export default App;
