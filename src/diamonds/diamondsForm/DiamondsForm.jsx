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
        this.shapeOptions = ["Round Brilliant", "Princess", "Cushion", "Oval", "Emerald", "Asscher", "Radiant", "Pear", "Marquise", "Heart"];
        this.gradeOptions = [
            "Flawless(FL)",
            "Internally Flawless(IF)",
            "Very, Very Slightly Included(VVS1)",
            "Very, Very Slightly Included(VVS2)",
            "Very Slightly Included(VS1)",
            "Very Slightly Included(VS2)",
            "Slightly Included(SI1)",
            "Slightly Included(SI2)",
            "Included(I1)",
            "Included(I2)",
            "Included(I3)"
        ];
        this.cutOptions = [
            "Excellent",
            "Very Good",
            "Good",
            "Fair",
            "Poor"
        ]
        this.colorOptions = [
            "D",
            "E",
            "F"
        ]
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
            <div className="diamonds-container">
                <h1>Sell Your Diamond</h1>
                <form className="diamond-form" onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                        <label id="name">Description
                            <input id="name" type="text" value={this.state.name} onChange={this.onInputChange('name')} placeholder="a short description for your stone" />
                        </label>
                        <div className="diamond-row">
                            <label htmlFor="price">Price
                                <input id="price" type="number" value={this.state.price} onChange={this.onInputChange('price')} placeholder="USD" />
                            </label>
                            <label id="carat">Carat
                                <input id="carat" type="number" value={this.state.carat} onChange={this.onInputChange('carat')} placeholder="" />
                            </label>
                        </div>
                        <label id="url">Image URL
                            <input id="url" type="text" value={this.state.url} onChange={this.onInputChange('url')} placeholder="https://" />
                        </label>
                        <label id="shape">Shape
                            <select
                                value={this.state.shape}
                                id="shape"
                                className="category-form-dropdown"
                                onChange={this.onInputChange('shape')}>
                                <option value=""></option>
                                {
                                    this.shapeOptions.map((shape, idx) =>
                                        <option value={idx} key={shape}>{shape}</option>
                                    )
                                }
                            </select>
                        </label>
                        <label id="grade">Clarity Grade
                            <select
                                value={this.state.grade}
                                id="grade"
                                className="category-form-dropdown"
                                onChange={this.onInputChange('grade')}>
                                <option value=""></option>
                                {
                                    this.gradeOptions.map((grade, idx) =>
                                        <option value={idx} key={grade}>{grade}</option>
                                    )
                                }
                            </select>                        
                        </label>
                        <label id="cut">Cut Grade
                            <select
                                value={this.state.cut}
                                id="cut"
                                className="category-form-dropdown"
                                onChange={this.onInputChange('cut')}>
                                <option value=""></option>
                                {
                                    this.cutOptions.map((cut, idx) =>
                                        <option value={idx} key={cut}>{cut}</option>
                                    )
                                }
                            </select>
                        </label>
                        <label id="color">Color Grade
                            <select
                                value={this.state.color}
                                id="color"
                                className="category-form-dropdown"
                                onChange={this.onInputChange('color')}>
                                <option value=""></option>
                                {
                                    this.colorOptions.map((color, idx) =>
                                        <option value={idx+3} key={color}>{color}</option>
                                    )
                                }
                            </select>
                        </label>
                        <br />
                        <center>
                            <button type="submit" className="pure-button pure-button-primary">Create</button>
                        </center>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default DiamondForm