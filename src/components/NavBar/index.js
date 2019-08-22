import React, {Component} from 'react'
import Logo from '../../assests/img/Logo_ML.png'
import Pesquisa from '../../assests/img/ic_Search.png'
import { Link } from 'react-router-dom'



class NavBar extends Component{
    render(){


        const {onSubmit, onChange, inputRef, value } =this.props;
        return(
           <nav className="nav">
               <div className="nav-container">
                   <Link to="/" className="nav-img">
                        <img src={Logo}  alt="logo Mercado Livre"/>
                   </Link>
                   <form className="nav-form" action="/" onSubmit= {onSubmit}>
                       <input 
                        onChange = {onChange}
                        ref = {inputRef}
                        type="text" 
                        className="nav-form-input" 
                        placeholder="Nunca deixe de buscar"
                        value = {value}
                        />
                        <button className="nav-form-btn" type="submit" onSubmit= {onSubmit}>
                            <img src={Pesquisa} alt="icone de lupa para pesquisar" />
                        </button>
                   </form>
               </div>
           </nav>
        )
    }
}

export default NavBar 

