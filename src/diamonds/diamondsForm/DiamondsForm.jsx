import React, { Component } from 'react'

class DiamondForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            url: '',
            shape: '',
            carat: '',
            grade: '',
            cut: '',
            color: '',
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
        // if (this.state.name.length < 2) {
        //     return alert('Please fill in the price.')
        // }
      this.props.createDiamond(
        this.state.name, 
        parseInt(this.state.price, 10),
        this.state.url,
        parseInt(this.state.shape, 10),
        parseInt(this.state.carat, 10),
        parseInt(this.state.grade, 10),
        parseInt(this.state.cut, 10),
        parseInt(this.state.color, 10)
      ); 
    }

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" value={this.state.price} onChange={this.onInputChange('price')} placeholder="Price" />
                    <input id="name" type="text" value={this.state.name} onChange={this.onInputChange('name')} placeholder="Name" />
                    <input id="url" type="text" value={this.state.url} onChange={this.onInputChange('url')} placeholder="url" />
                    <input id="shape" type="number" value={this.state.shape} onChange={this.onInputChange('shape')} placeholder="shape" />
                    <input id="carat" type="number" value={this.state.carat} onChange={this.onInputChange('carat')} placeholder="carat" />
                    <input id="grade" type="number" value={this.state.grade} onChange={this.onInputChange('grade')} placeholder="grade" />
                    <input id="cut" type="number" value={this.state.cut} onChange={this.onInputChange('cut')} placeholder="cut" />
                    <input id="color" type="number" value={this.state.color} onChange={this.onInputChange('color')} placeholder="color" />
                    <span className="pure-form-message">This is a required field.</span>

                    <br />

                    <button type="submit" className="pure-button pure-button-primary">Create</button>
                </fieldset>
            </form>
        )
    }
}

export default DiamondForm