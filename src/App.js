// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import AboutPage from './pages/AboutPage/AboutPage';
import Homepage from "./pages/HomePage/Homepage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main className=" mt-5 p-5">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="about-us" element={<AboutPage />}></Route>
            <Route path="contact-us" element={<ContactUsPage />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
