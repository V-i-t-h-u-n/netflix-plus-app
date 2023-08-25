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

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="App">
          <Header />

          <main className=" mt-5 p-5">
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
            </Routes>
          </main>

          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
