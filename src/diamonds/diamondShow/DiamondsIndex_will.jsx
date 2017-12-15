import React from 'react'

class DiamondsIndex extends React.Component {
    
    constructor(props){
        super(props); 
        this.state = {
            name: '',
            price: '',
            buyId: '',
        }; 
    }

    componentDidMount() {
        this.props.requestAllDiamonds();
    }

    update(field) {
       return (e) => this.setState({ [field]: e.target.value });
    }

   handleSubmit() {
       return (e) => {
            e.preventDefault;
            this.props.createDiamond({ name: this.state.name, 
                price: parseInt(this.state.price)
            });
       };
   }

   handleBuy() {
    return (e) => {
        e.preventDefault;
        this.props.buyDiamond(parseInt(this.state.buyId));
    };
   }

    render() {
        return (
            <div className="container">
                <input type="text" 
                    placeholder='Name' 
                    value={this.state.name}
                    onChange={this.update('name')}
                />
                <input type="number" 
                    placeholder='Price' 
                    value={this.state.price}
                    onChange={this.update('price')}
                />
                <input type="submit" onClick={this.handleSubmit()} value='Create'/>

                <input type="number" 
                    placeholder='diamond id to buy'
                    onChange={this.update('buyId')}
                />
                <input type="submit" onClick={this.handleBuy()} value='Buy'/>
            </div>
        )

    }
}

export default DiamondsIndex
