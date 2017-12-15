import React from 'react'; 
import { Link } from 'react-router';

class DiamondsIndex extends React.Component {

    constructor(props){
        super(props); 
        this.state = {
            diamonds: {},
        }; 
    }

    componentDidMount(){
        this.props.requestAllDiamonds(); 
    }

    componentWillReceiveProps(newProps){
        this.setState({diamonds: newProps.diamonds})
    }

    render(){
        let diamonds; 
        if(this.state.diamonds[0]){ 
            
           
            diamonds = Object.keys(this.state.diamonds).map(diamondId => {

                return(
                <div className="diamonds-item">
                    <br/><br/><br/>
                    <img className="diamond-img"src="https://www.whiteflash.com/images/rd/articles/A-CUT-ABOVE-Diamond-sm.jpg"
                    width="40" height="40" alt=""/>
                    <ul className="diamonds-properites-list">
                        <Link to={`diamonds/${diamondId}`}>{this.state.diamonds[diamondId].name}</Link>
                        <li>{this.state.diamonds[diamondId].price}</li>
                        <li>{this.state.diamonds[diamondId].address}</li>
                    </ul>
                </div>
                )
            });
        }else{
            diamonds = <li>Diamonds</li>
        }

        return (
            <div className="diamonds-container">
                {diamonds}
            </div>
        )

    }
}

export default DiamondsIndex
