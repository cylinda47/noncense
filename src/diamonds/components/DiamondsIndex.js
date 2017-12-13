import React from 'react'

class DiamondsIndex extends React.Component {

    constructor(props){
        super(props); 
        this.state = {
            diamonds: [],
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
        if(this.state.diamonds.length > 0){
            diamonds = this.state.diamonds.map(diamond => {
                <li>Diamond</li>
            })
        }else{
            diamonds = <li>Diamonds</li>
        }

        return (
            <div>
                {diamonds}
            </div>
        )

    }
}

export default DiamondsIndex
