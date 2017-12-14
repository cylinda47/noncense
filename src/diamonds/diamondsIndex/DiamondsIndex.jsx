import React from 'react'

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
        console.log(this.state.diamonds[0]);
        if(this.state.diamonds[0]){
            console.log("im here!!");
            diamonds = Object.keys(this.state.diamonds).map(diamondId => (
                <div className="diamonds-item">
                    <br/><br/><br/>
                    {/* <img src="https://www.whiteflash.com/images/rd/articles/A-CUT-ABOVE-Diamond-sm.jpg"
                    width="40" height="40" alt=""/> */}
                    <ul className="diamonds-properites-list">
                        <li>{this.state.diamonds[diamondId].price}</li>
                        <li>{this.state.diamonds[diamondId].address}</li>
                    </ul>
                </div>
            ));
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
