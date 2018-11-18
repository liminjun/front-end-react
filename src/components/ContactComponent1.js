import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Col, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Control, Form, Errors, actions } from 'react-redux-form';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    handleSubmit(event) {
        console.log("Current State is:" + JSON.stringify(this.state));
        alert("Current State is:" + JSON.stringify(this.state));
        this.props.resetFeedbackForm();
        //event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstName, lastName, telnum, email) {
        const errors = {
            firstName: '',
            lastName: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstName && firstName.length < 3) {
            errors.firstName = "First Name should be >= 3 characters";
        } else if (this.state.touched.firstName && firstName.length > 10) {
            errors.firstName = "First Name should be <= characters";
        }

        if (this.state.touched.lastName && lastName.length < 3) {
            errors.lastName = "Last Name should be >= 3 characters";
        } else if (this.state.touched.lastName && lastName.length > 10) {
            errors.lastName = "Last Name should be <= 10 characters";
        }

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. Number should be contain only number."
        }

        if (this.state.touched.email && email.split("").filter(x => x === '@').length !== 1) {
            errors.email = "Email should contain a @";
        }
        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telnum, this.state.email);

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/contactus">Contact Us</Link>
                        </BreadcrumbItem>

                    </Breadcrumb>

                </div>
                <div className="row row-content">

                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName}
                                        valid={errors.firstName === ''}
                                        invalid={errors.firstName !== ''}
                                        onBlur={this.handleBlur('firstName')}
                                        onChange={this.handleInputChange}></Input>

                                    <FormFeedback>
                                        {errors.firstName}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName}
                                        valid={errors.lastName === ''}
                                        invalid={errors.lastName !== ''}
                                        onBlur={this.handleBlur('lastName')}
                                        onChange={this.handleInputChange}></Input>
                                    <FormFeedback>
                                        {errors.lastName}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telenum" md={2}>Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel No." value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange}></Input>
                                    <FormFeedback>
                                        {errors.telnum}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="email" name="email" placeholder="mail@example.com" value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange}></Input>
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" placeholder="" rows="12" value={this.state.message} onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}
export default Contact;