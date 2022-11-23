import logo from './logo.svg';
import './App.css';
import ImageSection from './Components/ImageSection';
import NameSection from './Components/NameSection';
import AboutInterest from './Components/AboutInterest';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <ImageSection />
        <NameSection />
        <AboutInterest />
        <Footer />
      </div>
    </div>
  )
}

export default App;
