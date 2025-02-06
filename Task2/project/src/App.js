import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Main, Footer, AboutUs, Price } from './Components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/price' element={<Price />} />
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
