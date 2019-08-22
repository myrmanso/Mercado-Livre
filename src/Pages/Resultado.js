import React, {Component, Fragment} from 'react'
import Produtos from  '../components/Produtos/index'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import {getBusca} from '../server/base'
import Busca from './Busca'

class Resultado extends Component{

    
    constructor(){
        super()
        this.state = {
            resultado: [],
            id: [],
            preco: [],
            nome: [],
            img: [],
            local:[],
        }
    }

    componentDidMount() {
        
        const products = [];


        getBusca()
        .then(response => {
            const res = response.data.results;
            
            // for (const key in res) {
            //     console.log('teste:', key)s
            // }

            // Object.keys(res).map(value => {
            //     console.log('value:', value)
            // })


            for (const value of res.slice(0, 4)) {
                products.push(value);
            }

            this.setState({
                resultado: products
            })
        
        })
        .catch (error => {
            console.log(error)
        })   
        
    }

    

    render(){
        console.log(this.state)
        // const {id, img , preco, nome, local} = this.state

        return(
            <Fragment>
                <Busca   
                />
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
        )
    }
}

export default Resultado
