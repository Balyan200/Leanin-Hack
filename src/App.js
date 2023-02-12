
import './App.css';
import Carousels from './carousels'
import Header from './Header';
import Content from './content';

import Feedhome from './feedhome';
import Footer from './footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousels/>
      <Content/>
 
      <Feedhome/>
      <Footer/>
    </div>
  );
}

export default App;
