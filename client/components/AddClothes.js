import React, {Component} from 'react'
import {getCloth} from '../store/clothes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class AddClothes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cloth: {
        name: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = async evt => {
    evt.preventDefault()
    await this.props.getCloth(this.state.cloth, this.props.userId)
    this.setState({cloth: {}})
  }
  handleChange = evt => {
    evt.preventDefault()
    let newCloth = {...this.state.cloth}
    newCloth.name = evt.target.value
    this.setState({cloth: newCloth})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a clothing item:
            <input
              type="text"
              value={this.state.cloth.name || ''}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCloth: (cloth, userId) => dispatch(getCloth(cloth, userId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddClothes)
)
