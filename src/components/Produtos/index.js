import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Produtos extends Component{

    idLocalStorage = () =>{
        localStorage.clear();
        localStorage.setItem('id',this.props.id)
    }

    render(){


        console.log('produtos props', this.props)
        const {id, img , preco, nome, local} = this.props
        return(
            <section className="produto">                
                <div className="produto-container">
                    <div className="produto-divImg">
                        <Link to="/descricao" onClick={this.idLocalStorage}>
                            <img id={id} className="produto-img" src={img} alt="imagem do produto buscado" />
                        </Link>
                    </div>
                    <div className="produto-container">
                        <div className="produto-descricao">
                            <h3 className="produto-preco">$ {preco}</h3>
                            <h4 className="produto-nome">{nome}</h4>
                            {/* <h4 className="produto-nome">Completo unico!</h4>                                                        */}
                        </div>
                        <div>
                            <p className="produto-local">{local}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Produtos