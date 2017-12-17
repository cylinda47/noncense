import React from 'react'; 
import { Link } from 'react-router';

class DiamondsDashboard extends React.Component {
  componentDidMount() {
    this.props.requestOwnDiamonds();
    setTimeout(this.props.requestOwnDiamonds, 1000);
  }

  handleUpdatePrice(id) {
    return e => {
      e.preventDefault();
      const priceUSD = document.getElementById(`new-price-${id}`).value;
      this.props.updateDiamond(id, parseFloat(priceUSD, 10));
    }
  }

  render() { 
    const { diamonds, conv } = this.props;
    let content;
    if (diamonds.length > 0) {
      content = diamonds.map(diamond => (
        <div className="diamonds-item" key={diamond.id}>
          <Link className="diamond-item" to={`diamonds/${diamond.id}`}>
            <button className="diamond-buy">Buy</button>
            <ul className="diamonds-properites-list">
              <li><img src={diamond.url} alt='Diamond'/></li>
              <li className="diamond-name"><div>{diamond.name}</div></li>
              <li className="diamond-price">USD {(diamond.price / 1e18 * conv)
                .toLocaleString("en-US", { style: "currency", currency: "USD" })}
              </li>
            </ul>
          </Link>
          <form onSubmit={this.handleUpdatePrice(diamond.id)}>
            <input id={`new-price-${diamond.id}`} type="number" 
              placeholder='New Price (USD)'
            />
            <input type="submit" value='Update Price'/>
          </form>
        </div>
      ));
    }else{
      content = <li>You do not own any diamonds...yet</li>
    }

    return (
      <div className="diamonds-container">
        <h1>My Diamonds</h1>
        <div className="diamonds-item-container">{content}</div>
      </div>
    )

  }
}

export default DiamondsDashboard;
