import React, { Component } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css';

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            firstname: '',
            lastname: '',
            username: '',
        }
    }

    submit() {
        this.props.addUser({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
        });
    }
    update(){
        this.props.updateUser({
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
        });
        this.props.toggle();
    }

    componentDidMount() {
        this.setState(
            {
                id: this.props.editUser.id,
                firstname: this.props.editUser.firstname,
                lastname: this.props.editUser.lastname,
                username: this.props.editUser.username,
            }
        );
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} >
                <ModalHeader toggle={this.props.toggle}>{this.props.editUser.username==null?"New User":this.props.editUser.username}</ModalHeader>
                <ModalBody>
                    <div>
                        <label htmlFor="name">name: </label>
                        <Input
                            value={this.state.firstname}
                            onChange={(e) => this.setState({ firstname: e.target.value })}
                            id="name"
                            name="name"
                            type="text"
                        />
                        <label htmlFor="lastname">lastname: </label>
                        <Input
                            value={this.state.lastname}
                            onChange={(e) => this.setState({ lastname: e.target.value })} id="lastname" name='lastname' />
                        <label htmlFor="username">username: </label>
                        <Input
                            value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} id="username" name='username' />
                    </div>
                </ModalBody>
                <ModalFooter>
                    {
                        this.state.id ? (<Button type='submit' color="primary" onClick={() => {
                            this.update();
                        }}>
                            Update
                        </Button>) : (
                            <Button type='submit' color="primary" onClick={() => {
                                this.submit();
                            }}>
                                Add
                            </Button>
                        )
                    }
                    <Button color="secondary" onClick={this.props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}
