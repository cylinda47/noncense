import React from 'react'; 
import { Link } from 'react-router';

class DiamondsDashboard extends React.Component {
  componentDidMount() {
    this.props.requestOwnDiamonds(); 
  }

  render() { 
    const { diamonds } = this.props;    
    if (diamonds.length > 0) {
      return <ul>
        {
          diamonds.map(diamond => 
            <li key={diamond.id}>Name: {diamond.name} Price: {diamond.price}
              <img style={{width: '40px'}} src={diamond.url} alt='Diamond'/>
            </li>
          )
        }
      </ul>
    } else {
      return <h2>You do not own any diamonds...yet</h2>
    }
  }
}

export default DiamondsDashboard;
