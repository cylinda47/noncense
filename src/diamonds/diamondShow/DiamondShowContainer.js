import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestDiamond } from '../DiamondsActions';
import DiamondShow from './DiamondShow';

const mapStateToProps = (state, ownProps) => {
  return {
    web3: state.web3,
    diamondId: ownProps.params.diamondId, 
    diamond: state.diamonds, 
  }
};

const mapDispatchToProps = dispatch => ({
  requestDiamond: id => dispatch(requestDiamond(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiamondShow);
