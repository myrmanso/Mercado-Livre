import React, {Component, Fragment} from 'react'
import Detalhe from '../components/Detalhe/index'
import Busca from './Busca'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import {getDetalhe, getDescricao} from '../server/base'

class Descricao extends Component{

    constructor(){
        super()
        this.state = {
            img: '',
            descricao: '',
            qntVendida: 0,
            titulo: '',
            preco: 0,
            condicao:'',
        }
    }

    componentDidMount(){
        getDetalhe()
        .then(resposta => {
           console.log('resposta detalhe',resposta.data) 
           const resp = resposta.data
            this.setState({
                img: resp.pictures[0].url,
                qntVendida: resp.sold_quantity,
                titulo: resp.title,
                preco: resp.price,
                condicao: resp.condition,
            })
        })
        .catch(err => err)

        getDescricao()
        .then(resp =>{
           console.log('resposta descricao',resp.data.plain_text) 
           this.setState({
            descricao: resp.data.plain_text,
            })
        })
        .catch (error => {
            console.log(error)
        }) 
        
    }

    render(){
        const {img, descricao, preco, titulo, qntVendida, condicao} = this.state

        return(
            <Fragment>
                <Busca/>
                <Container>
                    <Detalhe
                        img = {img}
                        descricao = {descricao}
                        preco = {preco}
                        titulo = {titulo}
                        qntVendida = {qntVendida}
                        condicao = {condicao}
                    />
                </Container>
            </Fragment>
        )
    }
}

export default Descricao