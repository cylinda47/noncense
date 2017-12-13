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
        console.log("state"); 
        console.log("jacobrocks");
        console.log(this.state.diamonds);
        let diamonds; 
        if(this.state.diamonds.id){
            diamonds = (
                <div>
                    <br/><br/><br/>
                    <li>{this.state.diamonds.id}</li>
                    <li>{this.state.diamonds.price}</li>
                    <li>{this.state.diamonds.ownerAddr}</li>
                </div>
            );
        }else{
            diamonds = <li>Diamonds</li>
        }


        console.log("Im here!");
        console.log(diamonds);

        return (
            <div className="container">
                {diamonds}
                <div>HI IM HERE</div>
            </div>
        )

    }
}

export default DiamondsIndex
