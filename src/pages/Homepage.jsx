import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import UserListComponent from '../components/UserListComponent';
import { v4 as uuidv4 } from 'uuid';
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuidv4(),
          firstname: "Rasul",
          lastname: "Pirsoltanov",
          username: "RasulPirsoltanov",
        },
        {
          id: uuidv4(),
          firstname: "Mark",
          lastname: "Otto",
          username: "markotto",
        },
        {
          id: uuidv4(),
          firstname: "Jackob",
          lastname: "Torton",
          username: "jackobtorton",
        },
      ],
    };
    this.addUser=this.addUser.bind(this);
    this.deleteUser=this.deleteUser.bind(this);
    this.updateUser=this.updateUser.bind(this);
  }

  addUser(user) {
    user.id=uuidv4();
    const updatedUsers = [...this.state.users, user];
    this.setState({ users: updatedUsers });
  };
  deleteUser=(id)=>{
    const deletdeUser= this.state.users.filter(user => user.id == id);
    alertify.alert(`${deletdeUser[0].username} deleted successfully`);
    const updatedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({ users: updatedUsers });
  }
  
  updateUser(user1){
    console.log(user1);
    let chck=this.state.users.filter(user=>user.id===user.id);
    if(chck){
      let updatedList=this.state.users.filter(user=>user.id!==user1.id);
      this.setState({users:[...updatedList,user1]});
    }
  }

  render() {
    return (
      <div>
        <Navbar color='light' expand='md' light>
          <div className="container">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser} updateUser={this.updateUser} />
      </div>
    );
  }
}
