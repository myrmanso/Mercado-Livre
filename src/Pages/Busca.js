import React, {Component, Fragment} from 'react'
import NavBar from '../components/NavBar/index'
import Produtos from '../components/Produtos'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import {getBusca} from '../server/base'



class Busca extends Component{

    constructor(props){
        super(props)
        this.state = {
            valorBusca : '',
            buscaOk: false,
            resultado: [],
            id: [],
            preco: [],
            nome: [],
            img: [],
            local:[],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({buscaOk: true,})
        const inputValue = document.querySelector('.nav-form-input').value;

        console.log('VALOR DO INPUT', inputValue)
        this.setState({valorBusca : inputValue})
        

        var newLocation = `?q=${inputValue}`;
        window.history.pushState({}, "", newLocation);

        const products = [];
        getBusca(inputValue)
        .then(response => {
            const res = response.data.results
            console.log('response.data', response.data)
            console.log('res', res)
            for (const value of res.slice(0, 4)) {
                products.push(value);
                console.log('value: ', value)
            }

            this.setState({
                resultado: products
            })
        })      

    }

    valueChange = (e) => {
        e.preventDefault()
    }

    componentDidMount(){
        const products = [];

        var url_string = window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.get("q");

        getBusca(c)
        .then(response => {
            const res = response.data.results
            console.log('response.data', response.data)
            console.log('res', res)
            for (const value of res.slice(0, 4)) {
                products.push(value);
                console.log('value: ', value)
            }

            this.setState({
                resultado: products
            })

            this.setState({buscaOk: true})

        })
        .catch (error => {
            console.log(error)
        })   
    }


    render(){
        const {buscaOk} = this.state
        return(
            <Fragment>
            <NavBar
                onSubmit = {this.handleSubmit}
                onChange = {this.valueChange}
                inputRef = {(elementoBusca) => this.inputBusca = elementoBusca} 
                value = {this.state.value}
            />           
             {
                buscaOk &&
                    <Fragment>
                    <BreadCrumb/>
                    <Container>
                    {
                        this.state.resultado.map(produto => (
                            <Produtos 
                            id = {produto.id}
                            img = {produto.thumbnail}
                            nome = {produto.title}
                            preco = {produto.price}
                            local = {produto.seller_address.country.name}
                            />
                        ))
                    }
                    </Container>
                    </Fragment>
                        
                    // <Resultado/>                
            }
            </Fragment>
        )
    }
}

export default Busca
