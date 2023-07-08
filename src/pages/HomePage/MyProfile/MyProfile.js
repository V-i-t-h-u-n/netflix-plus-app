import React, { Component } from 'react'

export class MyProfile extends Component {
  state = {
    profileName : 'Vithun'
  }

  handleProfileNameChange = (event) =>{
    this.setState({
      profileName: event.target.value
    })
  }
  render() {
    return (
      <div>
        <p>
          Profile Updation
        </p>

        <input type='text' value={this.state.profileName} onChange={this.handleProfileNameChange}/>

        <p>
          {this.state.profileName}
        </p>
      </div>
    )
  }
}

export default MyProfile