import React, {Component} from 'react'

class Detalhe extends Component{
    render(){
        const {img, descricao, preco, titulo, qntVendida, condicao} = this.props

        return(
            <section className="detalhe">
                <div className="detalhe-container-img">
                    <img className="detalhe-img" src={img} alt="imagem do produto"/>
                </div>
                <div className="detalhe-container-preco">
                    <p className="detalhe-qtd">{condicao} - {qntVendida} vendidos</p>
                    <h3 className="detalhe-nome">{titulo}</h3>
                    <h1 className="detalhe-preco">$ {preco}</h1>
                    <button className="compra-btn">Comprar</button>
                </div>
                <div className="detalhe-container-descricao">
                    <h2 className="detalhe-tituloDescricao">Descrição do produto</h2>
                    <p className="detalhe-p-descicao">{descricao}</p>
                </div>
            </section>
        )
    }
}

export default Detalhe