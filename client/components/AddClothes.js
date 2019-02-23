import React, {Component} from 'react'
import {getCloth} from '../store/clothes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class AddClothes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cloth: {
        name: '',
        clothingType: '',
        color: '',
        weight: '',
        bodyPart: ''
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
    console.log('evt', evt.target.name)
    evt.preventDefault()
    let newCloth = {...this.state.cloth}
    let name = evt.target.name
    newCloth[name] = evt.target.value
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
              name="name"
              value={this.state.cloth.name || ''}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="clothingType"
              value={this.state.cloth.clothingType || ''}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="color"
              value={this.state.cloth.color || ''}
              onChange={this.handleChange}
            />
            <select
              name="weight"
              value={this.state.cloth.weight}
              onChange={this.handleChange}
            >
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </select>
            <select
              name="bodyPart"
              value={this.state.cloth.bodyPart}
              onChange={this.handleChange}
            >
              <option value="head">Head</option>
              <option value="body">Body</option>
              <option value="legs">Legs</option>
              <option value="feet">Feet</option>
            </select>
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
