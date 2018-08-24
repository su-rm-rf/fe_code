import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    return state
  }
  componentDidUpdate() {

  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState
  }
  handleClick() {
    this.setState({
      checked: !this.state.checked
    })
  }
  render() {
    return (
      <div onClick={ this.handleClick }>{ this.state.checked ? 'aaa' : 'bbb' }</div>
    )
  }
}