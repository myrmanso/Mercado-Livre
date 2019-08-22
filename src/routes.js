import React, {Component} from'react'
import {Switch, Route} from 'react-router-dom'
//Redirect

//Páginas
import Busca from './Pages/Busca'
import Resultado from './Pages/Resultado'
import Descricao from './Pages/Descricao'

// Função para retornar o valor da busca no browser
    // let pesquisa = localStorage.getItem('valueBusca')
    // const rotaBusca = `/items?search=${pesquisa}`


class Roteamento extends Component{
    
    render(){
        return(
            <Switch>
                <Route exact path="/" component = {Busca}/>
                <Route path= "/resultado"  component= {Resultado}/>
                <Route path="/descricao" component = {Descricao}/>
            </Switch>
        )
    }
}

export default Roteamento