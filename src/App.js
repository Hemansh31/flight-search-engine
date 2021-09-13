import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SideBar } from './components/SideBar/SideBar';
import { useSelector } from 'react-redux';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='AppContainer'>
        <SideBar />
        <Content />
      </div>      
      <Footer />
    </div>
  );
}

export default App;
