import { connect } from 'react-redux'
import { requestOwnDiamonds, updateDiamond } from '../DiamondsActions';
import DiamondsDashboard from './DiamondsDashboard';

const mapStateToProps = (state, ownProps) => {
  return {
    conv: state.conversion,
    diamonds: state.user.diamondIds.map(id => state.diamonds[id]) 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestOwnDiamonds: () => dispatch(requestOwnDiamonds()),
    updateDiamond: (id, priceUSD) => dispatch(updateDiamond(id, priceUSD)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiamondsDashboard);

