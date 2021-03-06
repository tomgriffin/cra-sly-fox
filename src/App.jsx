import React from 'react'
import request from 'superagent'
import './App.css'

class App extends React.Component {
  state = {
    url: '',
    error: null
  }

  componentDidMount () {
    const apiURL = 'https://randomfox.ca/floof/'
    return request
      .get(apiURL)
      .then(res => this.setState({ url: res.body.image }))
      .catch(err => this.setState({ error: err }))
  }

  render () {
    const { url } = this.state

    return (
      <div className='bkgd'>
        <h1>Thanks randomfox.ca for the sly fox pic!</h1>
        <img src={ url } alt="A random sly fox pic."/>
      </div>
    )
  }
}

export default App