// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import AboutPage from './pages/AboutPage/AboutPage';
import Homepage from './pages/HomePage/Homepage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from './containers/Shared/ErrorBoundary/ErrorBoundary';
import HocDemoPage from './pages/HocDemoPage/HocDemoPage';
import HooksDemoPage from './pages/HooksDemoPage/HooksDemoPage';
import { PageContext } from './contexts/PageContext/PageContext';
// import { CartContext } from './contexts/CartContext/CartContext';

import ShopPage from './pages/ShopPage/ShopPage';
// import { useContext } from 'react';

function App() {
  // const cartContext = useContext(CartContext);
  // console.log(cartContext);
  const userData = {
    isLoggedIn: true,
    lastSeen: 'Today 2.01pm'
  };
  return (
    // <CartContext.Provider value={cartContext}>
    <BrowserRouter>
      <ErrorBoundary>
        <div className="App">
          <Header />

          <main className=" mt-5 p-5">
            <PageContext.Provider value={userData}>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/hoc-demo" element={<HocDemoPage />}></Route>
                <Route
                  path="about-us"
                  element={
                    <ErrorBoundary>
                      <AboutPage />
                    </ErrorBoundary>
                  }
                ></Route>
                <Route path="contact-us" element={<ContactUsPage />}></Route>
                <Route path="hooks-demo" element={<HooksDemoPage />}></Route>
                <Route path="shop-page" element={<ShopPage />}></Route>
              </Routes>
            </PageContext.Provider>
          </main>

          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
    // </CartContext.Provider>
  );
}

export default App;
