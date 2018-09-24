import React, { Component } from 'react';
class EditUserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.user.id,
            name: this.props.user.name,
            email: this.props.user.email,
            height: this.props.user.height,
            weight: this.props.user.weight,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, name, email, height, weight } = this.state;
        this.props.editUser(id, name, email, height, weight);
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
            <button>Update User</button>
        </form>
        )
    }
}
export default EditUserForm;
