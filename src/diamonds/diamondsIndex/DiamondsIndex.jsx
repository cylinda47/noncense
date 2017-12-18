import React from 'react'; 
import { Link } from 'react-router';

class DiamondsIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllDiamonds(); 
  }

  render() {      
    const { diamonds, conv } = this.props;
    let content;
    if (diamonds.length > 0) {
      content = diamonds.map(diamond => (
        <Link className="diamond-item" to={`diamonds/${diamond.id}`} key={diamond.id}>
          <div className="diamonds-item">
            <button className="diamond-buy">Buy</button>
            <ul className="diamonds-properites-list">
              <li className='diamond-image-li'>
                <img src={diamond.url} alt='Diamond'/>
              </li>
              <li className="diamond-name"><div>{diamond.name}</div></li>
              <li className="diamond-price">USD {(diamond.price / 1e18 * conv)
                .toLocaleString("en-US", { style: "currency", currency: "USD" })}
              </li>
              <li>Owner: {diamond.ownerName}</li>
            </ul>
          </div>
        </Link>
      ));
    }else{
      content = <li>No Diamonds...yet</li>
    }

    return (
      <div className="diamonds-container">
        <h1>Search for Diamonds</h1>
        <div className="diamonds-item-container">{content}</div>
      </div>
    )
  }
}

export default DiamondsIndex
