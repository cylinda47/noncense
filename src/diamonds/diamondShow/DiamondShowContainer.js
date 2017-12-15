import { connect } from 'react-redux';
import getWeb3 from '../../util/web3/getWeb3';
import { requestDiamond, buyDiamond } from '../DiamondsActions';
import DiamondShow from './DiamondShow';

const mapStateToProps = (state, ownProps) => {
  const diamondId = parseInt(ownProps.params.diamondId);

  return {
    diamondId,
    diamond: state.diamonds[diamondId],
  }
};

const mapDispatchToProps = dispatch => ({
  getWeb3,
  requestDiamond: id => dispatch(requestDiamond(id)),
  buyDiamond: (id, price) => dispatch(buyDiamond(id, price)),
});

export default connect(mapStateToProps,mapDispatchToProps)(DiamondShow);
