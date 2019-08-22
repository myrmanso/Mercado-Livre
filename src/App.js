import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Páginas
import Busca from './Pages/Busca'
import Resultado from './Pages/Resultado'
import Descricao from './Pages/Descricao'


function App() {
  return (
      <Switch>
        <Route exact path="/" component = {Busca}/>
        <Route path="/resultado" component= {Resultado}/>
        <Route path="detalhe" component = {Descricao}/>
      </Switch>
  );
}

export default App;
