import { connect } from 'react-redux'
import { requestOwnDiamonds } from '../DiamondsActions';
import DiamondsDashboard from './DiamondsDashboard';

const mapStateToProps = (state, ownProps) => {
  return {
    diamonds: state.user.diamondIds.map(id => state.diamonds[id]) 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestOwnDiamonds: () => dispatch(requestOwnDiamonds())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiamondsDashboard);

