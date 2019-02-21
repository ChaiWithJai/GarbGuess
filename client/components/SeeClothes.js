import React, {Component} from 'react'
import {getAllClothes} from '../store/clothes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class SeeClothes extends Component {
  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    clothes: state.question.clothes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllClothes: userId => dispatch(getAllClothes(userId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SeeClothes)
)
