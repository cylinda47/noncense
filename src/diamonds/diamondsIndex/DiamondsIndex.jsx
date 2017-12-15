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
        console.log(this.state);
        let diamonds;
<<<<<<< HEAD
        if(this.state.diamonds[0]){


            diamonds = Object.keys(this.state.diamonds).map(diamondId => {

                return(
                <div className="diamonds-item">
                    <br/><br/><br/>
                    <img className="diamond-img"src="https://www.whiteflash.com/images/rd/articles/A-CUT-ABOVE-Diamond-sm.jpg"
                    width="40" height="40" alt=""/>
                  <ul className="diamonds-properties-list">
                        <Link to={`diamonds/${diamondId}`}>{this.state.diamonds[diamondId].name}</Link>
                        <li>{this.state.diamonds[diamondId].price}</li>
                        <li>{this.state.diamonds[diamondId].address}</li>
=======
        console.log(this.state.diamonds[0]);
        if (this.state.diamonds[0]) {
            console.log("im here!!");
            diamonds = Object.keys(this.state.diamonds).map(diamondId => (
                <div className="diamonds-item">
                    <button className="diamond-buy">Buy</button>
                    <ul className="diamonds-properites-list">
                        <li><img src="https://bnsec.bluenile.com/bluenile/is/image/bluenile/-graudated-milgrain-diamond-engagement-ring-14k-gold-/53700_main?$phab_detailmain$" /></li>
                        <li className="diamond-name"><Link to={`diamonds/${diamondId}`}>{this.state.diamonds[diamondId].name}</Link></li>
                        <li className="diamond-price">USD $ {this.state.diamonds[diamondId].price}.00</li>
                        {/* <li>{this.state.diamonds[diamondId].address}</li> */}
>>>>>>> d84864fea5b050d021d600784075773005e125f8
                    </ul>
                </div>
            ));
        }else{
            diamonds = <li>Diamonds</li>
        }

        return (
            <div className="diamonds-container">
                <h1>Search for Diamonds</h1>
                <div className="diamonds-item-container">{diamonds}</div>
            </div>
        )

    }
}

export default DiamondsIndex
