import React, {Component} from 'react';
import NavSup from './componentes/NavSup.js';
import GaleriaPost from './componentes/GaleriaPost';
import './App.css';



class App extends Component {
  render() {
    return (
    
    <div className="App">
      <NavSup></NavSup>
      <GaleriaPost></GaleriaPost>
    </div>
  );
  }
}

export default App;
