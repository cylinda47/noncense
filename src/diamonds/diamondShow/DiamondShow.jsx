import React from 'react';
import * as DiamondSpecs from '../diamondSpecs';

class DiamondShow extends React.Component {

  componentDidMount () {
    this.props.requestDiamond(this.props.diamondId);
  }

  handleBuy() {
    return (e) => {
        e.preventDefault();
        this.props.buyDiamond(this.props.diamondId, this.props.diamond.price)
          .then(() => setTimeout(() => this.props.router.push('/dashboard'), 1000));
    };
   }

  render () {
    const { diamond } = this.props;
    if (diamond) {
        return (
          <div className="diamonds-container">
            <nav></nav>
            <div className="diamonds-show">
              <div className="diamond-img" style={{backgroundImage: `url(${diamond.url})`}}/>
              <ul className="diamonds-properites-list">
                <li id="diamond-show-name">
                  <div id="diamond-show-line">
                    <span id="diamond-show-label">DESCRIPTION</span>
                    </div>
                    <p>{diamond.name}</p>
                </li>
                <li id="diamond-show-field">
                  <div id="diamond-show-line">
                    <span id="diamond-show-label">PRICE</span>
                    <span id="diamond-show-item">USD {(diamond.price / 1e18 * this.props.conv).toLocaleString(
                      "en-US", {style: "currency", currency: "USD"})}</span>
                  </div>
                </li>
                <li id="diamond-show-field">
                  <div id="diamond-show-line">
                    <span id="diamond-show-label">SHAPE</span>
                    <span id="diamond-show-item">{DiamondSpecs.shapeOptions[diamond.shape]}</span>
                  </div>
                </li>
                <li id="diamond-show-field">
                  <div id="diamond-show-line">
                    <span id="diamond-show-label">CARAT</span>
                    <span id="diamond-show-item">{diamond.carat / 100}</span>
                  </div>
                </li>
                <li id="diamond-show-field">
                  <div id="diamond-show-line">
                    <span id="diamond-show-label">CUT</span>
                    <span id="diamond-show-item">{DiamondSpecs.cutOptions[diamond.cut]}</span>
                  </div>
                </li>
                <li id="diamond-show-field">
                  <div id="diamond-show-line">
                    <span id="diamond-show-label">CLARITY GRADE</span>
                    <span id="diamond-show-item">{DiamondSpecs.clarityOptions[diamond.clarity]}</span>
                  </div>
                </li>
                <li>
                <div id="diamond-show-line">
                  <span id="diamond-show-label">COLOR GRADE</span>
                    <span id="diamond-show-item">{DiamondSpecs.colorOptions[diamond.color-3]}</span>
                </div>
                </li>
                <li><button onClick={this.handleBuy()}>Purchase</button></li>
              </ul>
            </div>
          </div>
        )
    } else {
      return <li>Loading...</li>
    }
  }
}

export default DiamondShow;
