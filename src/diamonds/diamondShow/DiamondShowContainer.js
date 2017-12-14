import { connect } from 'react-redux';

import { requestDiamond } from '../DiamondsActions';
import DiamondShow from './DiamondShow';

const mapStateToProps = (state, { match }) => {
  // const diamondId = parseInt(match.params.diamondId);

  return {
    web3: state.web3,
    diamond: state.diamonds.diamondId
  }
};

const mapDispatchToProps = dispatch => ({
  requestDiamond: id => dispatch(requestDiamond(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiamondShow);
