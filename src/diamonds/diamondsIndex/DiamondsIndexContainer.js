import { connect } from 'react-redux'
import { requestAllDiamonds } from '../DiamondsActions'
import DiamondsIndex from './DiamondsIndex'

const mapStateToProps = (state, ownProps) => {
    return {
        conv: state.conversion,
        diamonds: Object.values(state.diamonds)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestAllDiamonds: () => dispatch(requestAllDiamonds())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(DiamondsIndex)