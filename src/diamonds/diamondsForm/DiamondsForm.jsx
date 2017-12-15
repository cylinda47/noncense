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
        // if (this.state.name.length < 2) {
        //     return alert('Please fill in the price.')
        // }
        this.props.createDiamond(this.state.name, parseInt(this.state.price));
    }

    render() {
        return (
          <div className='new-diamond'>
            <br/><br/><br/>
            <form
              className="pure-form-stacked"
              onSubmit={this.handleSubmit.bind(this)}>
              <fieldset >
                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    type="number"
                    value={this.state.price}
                    onChange={this.onInputChange('price')}
                    placeholder="Price" />
                  <span className="pure-form-message">
                    This is a required field.
                  </span>
                </div>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input
                    id="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onInputChange('name')}
                    placeholder="Name" />
                  <span className="pure-form-message">
                    This is a required field.
                  </span>
                </div>

                <br />

                <button
                type="submit"
                  className="pure-button pure-button-primary">
                  Create
                </button>
              </fieldset>
            </form>
          </div>
        )
    }
}

export default DiamondForm
