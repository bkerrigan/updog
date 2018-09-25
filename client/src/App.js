import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import EditUserForm from './EditUserForm';
import NewUserForm from './NewUserForm';

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getUsers = this.getUsers.bind(this)
    this.getUser = this.getUser.bind(this)
    this.addNewUser = this.addNewUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  componentDidMount () {
    this.getUsers()
    this.getSports()
  }
  fetch (endpoint, options={}) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint, options)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  addNewUser(name, email, height, weight) {
    axios.post('users', { user: {name, email, height, weight} })
    .then(user => this.setState({user: user.data}))
    .catch(error => console.log(error))
  }
  editUser (id, name, email, height, weight, sports) {
    let userSports = sports.filter(s => !this.state.user.sports.includes(s)).map(s => ({ sport_id: s.id }))
    axios.put( 'users/' + id, {
      user: { name, email, height, weight, user_sports_attributes: userSports }
    })
    .then(user => this.setState({user: user.data}))
    .catch(error => console.log(error));
  }
  getUsers () {
    this.fetch('users')
      .then(users => {
        this.setState({users: users})
        this.getUser(users[0].id)
      })
  }
  getUser (id) {
    this.fetch(`users/${id}`)
      .then(user => this.setState({user: user}))
  }
  getSports () {
    this.fetch('sports')
      .then(sports => this.setState({sports: sports}))
  }
  render () {
    let {users, user, sports} = this.state
    return users
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='futbol' circular />
        <Header.Content>
          Users
        </Header.Content>
      </Header>
      <Button.Group fluid widths={users.length}>
        {Object.keys(users).map((key) => {
          return <Button active={user && user.id === users[key].id} fluid key={key} onClick={() => this.getUser(users[key].id)}>
            {users[key].name}
          </Button>
        })}
      </Button.Group>

      <Modal size='mini' trigger={<Button>Add New User</Button>} closeIcon>
        <Modal.Header>Add a user</Modal.Header>
        <Modal.Content>
          <NewUserForm onNewUser={this.addNewUser} />
        </Modal.Content>
      </Modal>
      <Divider hidden />
      {user &&
        <Container>
          <Header as='h2'>{user.name}</Header>
          <Modal size='tiny' trigger={<Button>Edit User</Button>} closeIcon>
            <Modal.Header>Add a user</Modal.Header>
            <Modal.Content>
              <EditUserForm user={user} key={user.id} sports={sports} editUser={this.editUser} />
            </Modal.Content>
          </Modal>
          {user.email && <p>{user.email}</p>}
          {user.height && <p>Height (inches): {user.height}</p>}
          {user.weight && <p>Weight (lbs): {user.weight}</p>}
          {user.teams &&
          <div>Teams<br />
            <Segment.Group>
              {user.teams.map((team, i) => <Segment key={i}>{team.name}</Segment>)}
            </Segment.Group>
              </div>
          }
          <br />
          {user.sports &&
          <div>Sports<br />
            <Segment.Group>
              {user.sports.map((sport, i) => <Segment key={i}><img className='sport-icon' src={sport.icon} alt={sport.name} />{sport.name}</Segment>)}
            </Segment.Group>
          </div>
          }
        </Container>
      }
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default App
