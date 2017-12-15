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
    this.props.getWeb3.then(() => this.props.requestDiamond(this.props.diamondId));
  }

  componentWillReceiveProps (newProps) {
    this.setState({diamond:newProps.diamond});
  }

  handleBuy() {
    return (e) => {
        e.preventDefault;
        this.props.buyDiamond(this.props.diamondId, this.props.diamond.price);
    };
   }

  render () {
    const { diamond } = this.props;
    if (diamond) {
        return (
          <div className="diamonds-item">
            <br /><br /><br />
            <img className="diamond-img"src="https://www.whiteflash.com/images/rd/articles/A-CUT-ABOVE-Diamond-sm.jpg"
                    width="40" height="40" alt=""/>
            <ul className="diamonds-properites-list">
              <li>{diamond.id}</li>
              <li>{diamond.name}</li>
              <li>{diamond.price}</li>
              <li>{diamond.ownerAddr}</li>
            </ul>
            <input type="submit" onClick={this.handleBuy()} value='Buy'/>
          </div>
        )
    } else {
      return <li>Loading...</li>
    }
  }
}

export default DiamondShow;
