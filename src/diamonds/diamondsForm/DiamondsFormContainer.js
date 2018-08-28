import { connect } from 'react-redux'
import { createDiamond } from '../DiamondsActions'
import DiamondsForm from './DiamondsForm'

const mapStateToProps = (state, ownProps) => {
  return {
    diamonds: state.diamonds,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDiamond: (name, price, url, shape, carat, grade, cut, color) => 
      dispatch(createDiamond(name, price, url, shape, carat, grade, cut, color)),
  }
}

const DiamondsFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiamondsForm)

export default DiamondsFormContainer; 