import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo: pseudo,
            message: this.state.message
        }
        addMessage(message)
        //reset form
        this.setState({message: '', length})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.createMessage()
        
    }

    handleKeyUp = e => {
        if (e.key === 'Enter') {
            this.createMessage()
        }
    }

    handleChange = e => {
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({message , length})
    }    

    render () {
        return (
            <form 
            className='form'
                onSubmit = { this.handleSubmit }>
                <textarea 
                value = { this.state.message }
                onChange = { this.handleChange }
                onKeyUp = { this.handleKeyUp }
                required
                maxLength={ this.props.length } />
                <div className='info'>
                    { this.state.length }
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        )
    }
}

export default Formulaire