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
        let diamonds; 
        console.log("state");
        console.log(this.state.diamonds);
        console.log(this.state.diamonds.id);
        if(this.state.diamonds.id === 0){
            console.log("im here")
            diamonds = (
                <div className="diamonds-item">
                    <br/><br/><br/>
                    <img src="https://www.whiteflash.com/images/rd/articles/A-CUT-ABOVE-Diamond-sm.jpg"
                    width="40" height="40" alt=""/>
                    <ul className="diamonds-properites-list">
                        <li>{this.state.diamonds.id}</li>
                        <li>{this.state.diamonds.price}</li>
                        <li>{this.state.diamonds.ownerAddr}</li>
                    </ul>
                </div>
            );
        }else{
            diamonds = <li>Diamonds</li>
        }

        console.log(diamonds);

        return (
            <div className="diamonds-container">
                {diamonds}
            </div>
        )

    }
}

export default DiamondsIndex
