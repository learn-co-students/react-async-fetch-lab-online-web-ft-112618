import React, { Component } from 'react'

export default class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(({people}) => this.setState({ data: people }))
  }

  render() {
    return (
      <div>
      {this.state.data.map((person) => <p>{person.name}</p>)}
      </div>
    )
  }
}
