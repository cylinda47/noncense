import React from 'react';
import { Link } from 'react-router';

class DiamondShow extends React.Component {
  componentDidMount () {
    this.props.getWeb3.then(() => this.props.requestDiamond(this.props.diamondId));
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.diamondId !== nextProps.diamondId) {
      this.props.requestDiamond(nextProps.diamondId);
    }
  }

  handleBuy() {
    return (e) => {
        e.preventDefault;
        this.props.buyDiamond(this.props.diamondId, this.props.diamond.price);
    };
   }

  render () {
    let { diamond, state } = this.props;
    console.log(state);

    if (diamond) {
      return (
        <div className="single-diamond-show">

          <h1 className='diamond-title'>Name: {diamond.name}</h1>
          <p>Price: {diamond.price}</p>
          <p>Owner: {diamond.owner}</p>
          <input type="submit" onClick={this.handleBuy()} value='Buy'/>

          <div className="diamond-index-link">
            <Link
              to="/diamonds"
              style={{
                textDecoration: 'none',
                color: 'darkgray',
                fontWeight: 'bolder'
              }}>
              Back to San Francisco ...
            </Link>
          </div>

        </div>
      );
    } else {
      return (
        <div className='empty'>
          loading...
        </div>
      );
    }
  }
}

export default DiamondShow;
