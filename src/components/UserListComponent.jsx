import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import FormComponent from './FormComponent';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            editUser: {}
        };
        this.getElementById = this.getElementById.bind(this);
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleDelete = (id) => {
        this.props.deleteUser(id);
    };

    getElementById(user) {
        this.setState({
            editUser: user,
            modal:true
        });
    };

    render() {
        return (
            <div className='container mt-5'>
                <button className='btn btn-primary mt-3' onClick={() => {
                    this.toggle()
                    this.setState({ editUser: {} })
                }}>Add</button>
                {
                    this.state.modal? (<FormComponent modal={this.state.modal} editUser={this.state.editUser} toggle={this.toggle} addUser={this.props.addUser} updateUser={this.props.updateUser}></FormComponent>):(null)
                }
                
                {
                    this.props.users.length > 0 ? (
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.username}</td>
                                            <td>
                                                <button className='btn btn-info' onClick={() => this.getElementById(user)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => this.handleDelete(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    ) : (
                        <Alert className='mt-3' color="danger">
                            This is a primary alert — check it out!
                        </Alert>
                    )
                }
            </div>
        );
    }
}
