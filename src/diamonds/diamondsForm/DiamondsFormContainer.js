import { connect } from 'react-redux'
import { receiveAllDiamonds, createDiamond } from '../DiamondsActions'
import DiamondsForm from './DiamondsForm'

const mapStateToProps = (state, ownProps) => {

    return {
        web3: state.web3,
        diamonds: state.diamonds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDiamond: (name, price) => dispatch(createDiamond(name, price))
    }
}

const DiamondsFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiamondsForm)

export default DiamondsFormContainer; 