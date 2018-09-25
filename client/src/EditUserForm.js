import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';
class EditUserForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
          id: this.props.user.id,
          name: this.props.user.name,
          email: this.props.user.email,
          height: this.props.user.height,
          weight: this.props.user.weight,
          userSports: this.props.user.sports,
          sports: this.props.sports
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleCheckbox = this.handleCheckbox.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.isUserSport = this.isUserSport.bind(this)
    }
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
    handleCheckbox = (e) => {
      let newSelectionArray;
      let newSport = this.state.sports.filter(s => s.name === e.target.innerText)[0]
      if (this.state.userSports.map(s => s.id).indexOf(newSport.id) > -1) {
        newSelectionArray = this.state.userSports.filter(s => s.id !== newSport.id)
      } else {
        newSelectionArray = this.state.userSports.concat(newSport);
      }

      this.setState({ userSports: newSelectionArray })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const { id, name, email, height, weight, userSports} = this.state;
      this.props.editUser(id, name, email, height, weight, userSports);
    }
    isUserSport = (sport) => {
      return this.state.userSports.map(s => s.id).indexOf(sport.id) > -1
    }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
            <input  name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange} />
            <input  name="email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} />
            <br />
            <input  name="height"
                    type="text"
                    placeholder="Height in inches"
                    value={this.state.height}
                    onChange={this.handleChange} />
            <input  name="weight"
                    type="text"
                    placeholder="Weight"
                    value={this.state.weight}
                    onChange={this.handleChange} />
            <br />
            {this.state.sports.map((sport) => {
              return <Checkbox name="user_sports_attributes"
                               label={sport.name}
                               key={sport.id}
                               value={sport.name}
                               onChange={this.handleCheckbox}
                               checked={this.isUserSport(sport)} />
            })}
            <button>Update User</button>
        </form>
      )
    }
}
export default EditUserForm;
