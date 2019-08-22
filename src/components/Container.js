import React, {Component} from 'react'

class Container extends Component{
    render(){
        return(
            <main className="main">
                <div className="main-container--bg">
                    { this.props.children }
                </div>
            </main>
        )
    }
}

export default Container