import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {

    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => json.people.forEach(person => this.setState({
      people: [...this.state.people, person.name]
      }))
    )
  }

  render() {
    return(
      <div>
        {this.state.people.map(person => person)}
      </div>
    )
  }
}

export default App
