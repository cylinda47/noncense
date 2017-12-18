import React, { Component } from 'react'
import * as DiamondSpecs from '../diamondSpecs';

class DiamondForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
          name: '',
          price: '',
          url: '',
          shape: '',
          carat: '',
          clarity: '',
          cut: '',
          color: '',
          testUrl: 'https://s3-us-west-1.amazonaws.com/noncense-pro/images/diamond.png',
          nameError: true,
          priceError: true,
          urlError: true,
          shapeError: true,
          caratError: true,
          clarityError: true,
          cutError: true,
          colorError: true,
      }
  }

  checkImageUrl() {
    this.setState({ testUrl: this.state.url });
  }

  checkBlankInput(field) {
    return () => {
      if (this.state[field]) {
        this.setError(field, false);
      } else {
        this.setError(field, true);
      }
    }
  }

  setError(field, value) {
    this.setState({ [`${field}Error`]: value },
      () => this.updateErrorClass(field)
    );
  }

  updateErrorClass(field) {
    if (this.state[`${field}Error`])
      document.getElementById(`${field}-error`).classList.remove('hidden');
    else
      document.getElementById(`${field}-error`).classList.add('hidden');
  }

  onInputChange(field) {
      return evt => this.setState({ [field]: evt.target.value });
  }

  renderAllErrors() {
    ['name','price','url','shape','carat','clarity','cut', 'color'].forEach(field =>
      this.updateErrorClass(field)
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    
    this.checkImageUrl();
    this.renderAllErrors();
    
    const { nameError, priceError, urlError, shapeError, caratError, 
            clarityError, cutError, colorError, url } = this.state;

    if (!(nameError || priceError || urlError || shapeError || caratError || 
          clarityError || cutError || colorError || url === ''))

      this.props.createDiamond(
        this.state.name, 
        parseInt(this.state.price, 10),
        this.state.url,
        parseInt(this.state.shape, 10),
        parseInt(this.state.carat * 100, 10),
        parseInt(this.state.clarity, 10),
        parseInt(this.state.cut, 10),
        parseInt(this.state.color, 10)
      )
      .then(() => setTimeout(() => this.props.router.push('/dashboard'),1000));
  }

  render() {
    return (
      <div className="diamonds-container">
        <h1>Sell Your Diamond</h1>
        <form className="diamond-form" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <label htmlFor="name">Description
              <input id="name" 
                type="text" 
                value={this.state.name} 
                onChange={this.onInputChange('name')}
                onBlur={this.checkBlankInput('name')}
                placeholder="a short description of your diamond" 
              />
              <span id='name-error' className='error hidden'>
                Description cannot be blank
              </span>
            </label>

            <div className="diamond-row">
              <label htmlFor="price">Price
                <input id="price" 
                  type="number" step='0.01' min='0.01'
                  value={this.state.price}
                  onChange={this.onInputChange('price')}
                  onBlur={this.checkBlankInput('price')}
                  placeholder="USD" 
                />
                <span id='price-error' className='error hidden'>
                  Price must be greater than 0
                </span>
              </label>

              <label htmlFor="carat">Carat
                <input id="carat" 
                  type="number" 
                  value={this.state.carat} step='0.01' min='0.01' max='1000'
                  onChange={this.onInputChange('carat')}
                  onBlur={this.checkBlankInput('carat')}
                  placeholder="0.00" 
                />
                <span id='carat-error' className='error hidden'>
                  Carat must be greater than 0
                </span>
              </label>
            </div>

            <label htmlFor="url">Image URL
              <input id="url" 
                type="text" 
                value={this.state.url} 
                onChange={this.onInputChange('url')} 
                onBlur={() => this.checkImageUrl()} 
                placeholder="https://" 
              />
              <img style={{display: 'none'}} 
                src={this.state.testUrl} alt="Uploaded diamond"
                onError={() => this.setError('url', true)} 
                onLoad={() => this.setError('url', false)} 
              />
              <span id='url-error' className='error hidden'>
                Invalid Image URL, please try again
              </span>
            </label>

            <label htmlFor="shape">Shape
              <select
                id="shape"
                className="category-form-dropdown"
                value={this.state.shape}
                onChange={this.onInputChange('shape')}
                onBlur={this.checkBlankInput('shape')}
              >
                <option value="" disabled></option>
                {
                  DiamondSpecs.shapeOptions.map((shape, idx) =>
                    <option value={idx} key={idx}>{shape}</option>
                  )
                }
              </select>
              <span id='shape-error' className='error hidden'>
                Shape cannot be blank
              </span>
            </label>

            <label htmlFor="clarity">Clarity Grade
              <select
                id="clarity"
                className="category-form-dropdown"
                value={this.state.clarity}
                onChange={this.onInputChange('clarity')}
                onBlur={this.checkBlankInput('clarity')}
              >
                <option value="" disabled></option>
                {
                  DiamondSpecs.clarityOptions.map((clarity, idx) =>
                    <option value={idx} key={idx}>{clarity}</option>
                  )
                }
              </select>
              <span id='clarity-error' className='error hidden'>
                Clarity cannot be blank
              </span>                     
            </label>

            <label htmlFor="cut">Cut Grade
              <select
                value={this.state.cut}
                id="cut"
                className="category-form-dropdown"
                onChange={this.onInputChange('cut')}
                onBlur={this.checkBlankInput('cut')}
              >
                <option value="" disabled></option>
                {
                  DiamondSpecs.cutOptions.map((cut, idx) =>
                    <option value={idx} key={cut}>{cut}</option>
                  )
                }
              </select>
              <span id='cut-error' className='error hidden'>
                Cut cannot be blank
              </span>
            </label>

            <label htmlFor="color">Color Grade
              <select
                value={this.state.color}
                id="color"
                className="category-form-dropdown"
                onChange={this.onInputChange('color')}
                onBlur={this.checkBlankInput('color')}
              >
                <option value="" disabled></option>
                {
                  DiamondSpecs.colorOptions.map((color, idx) =>
                    <option value={idx+3} key={color}>{color}</option>
                  )
                }
              </select>
              <span id='color-error' className='error hidden'>
                Color cannot be blank
              </span>
            </label>
            
            <br />
            <center>
              <button type="submit" className="pure-button pure-button-primary">
                Create
              </button>
            </center>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default DiamondForm