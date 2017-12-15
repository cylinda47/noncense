import React, { Component } from 'react'

class DiamondForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(field, event) {

        return (event) => {
            this.setState({ [field]: event.target.value })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createDiamond(this.state.name, parseInt(this.state.price)); 
    }

    render() {
        return (
            <div className="diamonds-container">
            <h1>Sell Your Diamonds</h1>
                <form className="diamond-form" onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                        <label htmlFor="name">Description</label>
                        <input id="name" type="text" value={this.state.name} onChange={this.onInputChange('name')} placeholder="Description" />
                        <div className="diamond-row">
                            <label htmlFor="price">Price (USD)
                                <input id="price" type="number" value={this.state.price} onChange={this.onInputChange('price')} placeholder="Price" />
                            </label>
                            <label htmlFor="price">Price (USD)
                                <input id="price" type="number" value={this.state.price} onChange={this.onInputChange('price')} placeholder="Price" />
                            </label>
                        </div>
                        <br />
                        <button type="submit" className="pure-button pure-button-primary">Create</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default DiamondForm