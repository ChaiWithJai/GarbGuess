import React, {Component} from 'react'
import {getAllClothes} from '../store/clothes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class SeeClothes extends Component {
  async componentDidMount() {
    await this.props.getAllClothes(this.props.userId)
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      await this.props.getAllClothes(this.props.userId)
    }
  }
  render() {
    const {clothes} = this.props
    let shouldRender = 'yes'
    if (!clothes) {
      shouldRender = 'no'
    }
    return (
      <div>
        <p>Select Some Clothes Here</p>
        <table>
          <tbody>
            {shouldRender === 'yes' ? (
              clothes.map(val => {
                return (
                  <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.color}</td>
                    <td>{val.clothingType}</td>
                    <td>{val.bodyPart}</td>
                  </tr>
                )
              })
            ) : (
              <p>Time to buy some new stuff</p>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    clothes: state.clothes.clothes
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
