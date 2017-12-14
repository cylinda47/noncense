import React, { Component } from 'react'

class DiamondForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        price: ''
    }
  }

  onInputChange(event) {
    this.setState({ price: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // if (this.state.name.length < 2) {
    //     return alert('Please fill in the price.')
    // }
    this.props.onDiamondFormSubmit(this.state.price)
  }

  render() {
    return (
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="price">Price</label>
          <input id="price" type="number" value={this.state.price} onChange={this.onInputChange.bind(this)} placeholder="Price" />
          <span className="pure-form-message">This is a required field.</span>
            <br />
          <button type="submit" className="pure-button pure-button-primary">Create</button>
        </fieldset>
      </form>
    )
  }
}

export default DiamondForm
