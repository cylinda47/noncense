import { connect } from 'react-redux'
import { createDiamond, requestAllDiamonds, buyDiamond } from '../DiamondsActions'
import DiamondsIndex from './DiamondsIndex'

const mapStateToProps = (state, ownProps) => {
    
    return {
        web3: state.web3,
        diamonds: state.diamonds 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestAllDiamonds: () => dispatch(requestAllDiamonds()),
        createDiamond: diamond => dispatch(createDiamond(diamond)),
        buyDiamond: diamondId => dispatch(buyDiamond(diamondId)),
    }
}

const DiamondsIndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiamondsIndex)

export default DiamondsIndexContainer; 