// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import AboutPage from './pages/AboutPage/AboutPage';
import Homepage from './pages/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />

      <main className=' mt-5 p-5'  >

      <Homepage/>

      </main>

      <Footer />
    </div>
  );
}

export default App;
