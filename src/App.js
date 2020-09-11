import React, {Component} from 'react';
import NavSup from './componentes/NavSup.js';
import GaleriaPost from './componentes/GaleriaPost';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PaginaPostar from './componentes/PaginaPostar.js';



class App extends Component {
  render() {
    return (
    
    <div className="App">
      
      <BrowserRouter>
        
        <Route exact path="/">
          <NavSup></NavSup>
          <GaleriaPost></GaleriaPost>
        </Route>

        <Route path="/postar">
          <NavSup></NavSup>
          <PaginaPostar></PaginaPostar>
        </Route>
      </BrowserRouter>

            
      {/* <GaleriaPost></GaleriaPost> */}
    </div>
  );
  }
}

export default App;
