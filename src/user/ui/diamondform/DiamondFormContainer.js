import { connect } from 'react-redux'
import DiamondForm from './DiamondForm'
import { createDiamond } from './DiamondFormActions'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDiamondFormSubmit: (price) => {
            dispatch(createDiamond(name))
        }
    }
}

const DiamondFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiamondForm)

export default DiamondFormContainer
