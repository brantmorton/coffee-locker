import React, {Component} from 'react'
import Auth from '../../Auth'

class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    console.log(auth)
    auth.handleAuthentication()
  }

  render() {
    return (
      <div>Loading...</div>
    )
  }
}

export default Callback