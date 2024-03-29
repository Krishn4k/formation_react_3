import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo:'',
        goToChat: false
    }

    handleChange = e => {
        const pseudo = e.target.value
        this.setState({pseudo})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ goToChat: true})
    }

    render () {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input 
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Pseudo'
                    type='text'
                    required />
                    <button type='submit'>Go</button>
                </form> 
            </div>
        )
    }
}

export default Connexion