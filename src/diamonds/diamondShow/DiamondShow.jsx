import React from 'react';
import { Link } from 'react-router';

class DiamondShow extends React.Component {
  componentDidMount () {
    this.props.requestDiamond(this.props.diamondId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.diamondId !== nextProps.diamondId) {
      this.props.requestDiamond(nextProps.diamondId);
    }
  }

  // <div className='diamond-show-image'>
  //   <img src={diamond.img_url} />
  // </div>
  render () {
    let { diamond } = this.props;
    debugger

    if (diamond) {
      return (
        <div className="single-diamond-show">

          <h1 className='diamond-title'> { diamond.name} </h1>
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
