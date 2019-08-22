import React, {Component, Fragment} from 'react'
import NavBar from '../components/NavBar/index'



class Busca extends Component{

    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return this.props.history.push('/resultado')//Uma função do router que vai receber por props. dentro do push você coloca o local da rota que você quer 
    }

    valueChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        localStorage.setItem('valueBusca', e.target.value)
        this.setState({value : e.target.value})
        console.log('state.value', this.state.value)
    }


    render(){


        return(
            <Fragment>
            <NavBar
                onSubmit = {this.handleSubmit}
                onChange = {this.valueChange}
                inputRef = {(elementoBusca) => this.inputBusca = elementoBusca} 
                value = {this.state.value}
            />           
            </Fragment>
        )
    }
}

export default Busca
