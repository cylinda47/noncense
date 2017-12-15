import React from 'react';
import { Link } from 'react-router';

class DiamondShow extends React.Component {

  constructor(props){
    super(props); 
    this.state = {
      diamond: {}
    }; 

  }
  componentDidMount () {
    this.props.requestDiamond(this.props.diamondId);
  }

  componentWillReceiveProps (newProps) {
    this.setState({diamond:newProps.diamond});
  }

  render () {

    let diamond; 
    if (this.state.diamond.name) {
        diamond = (
          <div className="diamonds-item">
            <br /><br /><br />
            <img className="diamond-img"src="https://www.whiteflash.com/images/rd/articles/A-CUT-ABOVE-Diamond-sm.jpg"
                    width="40" height="40" alt=""/>
            <ul className="diamonds-properites-list">
              <li>{this.state.diamond.id}</li>
              <li>{this.state.diamond.name}</li>
              <li>{this.state.diamond.price}</li>
              <li>{this.state.diamond.address}</li>
            </ul>
          </div>
        )
    } else {
      diamond = <li>No Diamond</li>
    }


      return (
          <div className="single-diamond-show">

            <h1 className='diamond-title'> {this.state.diamond.name} </h1>
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
            {diamond}
          </div>
      );
    }
  }


export default DiamondShow;
