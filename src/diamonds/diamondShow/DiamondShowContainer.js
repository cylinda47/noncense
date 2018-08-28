import { connect } from 'react-redux';
import getWeb3 from '../../util/web3/getWeb3';
import { requestDiamond, requestDiamondDetails, buyDiamond } from '../DiamondsActions';
import DiamondShow from './DiamondShow';

const mapStateToProps = (state, ownProps) => {
  const diamondId = parseInt(ownProps.params.diamondId, 10);

  return {
    diamondId,
    diamond: state.diamonds[diamondId],
    conv: state.conversion,
    loading: state.loading,
    currentUsername: state.user.data.name
  }
};

const mapDispatchToProps = dispatch => ({
  getWeb3,
  requestDiamond: id => dispatch(requestDiamond(id)),
  requestDiamondDetails: id => dispatch(requestDiamondDetails(id)),
  buyDiamond: (id, price) => dispatch(buyDiamond(id, price)),
});

export default connect(mapStateToProps,mapDispatchToProps)(DiamondShow);
