import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
    Button, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,

            firstName: '',
            lastName: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                telnum: false,
                email: false
            }
        }

        this.toggle = this.toggle.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    handleSubmit(values) {
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is:" + JSON.stringify(values));
        
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        //event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(username) {
        const errors = {
            username: ''
        };

        if (this.state.touched.username && username.length < 3) {
            errors.username = "Your name must be  greater than 2 characters";
        } else if (this.state.touched.username && username.length > 15) {
            errors.username = "Your name must be 15 characters or less";
        }



        return errors;
    }



    render() {
        const errors = this.validate(this.state.username);

        return (
            <div>
                <Button color="default" onClick={this.toggle}>
                    <i className="fa fa-edit"></i>Submit Comment
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="col-12 col-md-12">
                                <LocalForm className="inline" onSubmit={(values) => this.handleSubmit(values)}>

                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control type="number" model=".rating" id="rating" name="rating"
                                            placeholder="1-5"
                                            className="form-control"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".rating"
                                            show="touched"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="username">Your Name</Label>
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{ required,minLength:minLength(3),
                                            maxLength:maxLength(15) }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" />
                                    </Row>

                                    <Row className="form-group">
                                        <Button type="submit" color="primary">
                                            Submit
                                    </Button>
                                    </Row>
                                </LocalForm>
                            </div>
                        </div>


                    </ModalBody>

                </Modal>


            </div>
        );
    }

}
export default CommentForm;