import './App.css'
import Header from './components/Header/Header'
import MainContainer from './components/Main/MainContainer';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Custom from './components/Custom/Custom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <> 
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/create' element={<Custom />}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
