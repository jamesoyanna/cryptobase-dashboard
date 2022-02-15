// imports
import React, { Component } from 'react';
import { Container, Row, Col, Button, Navbar, Form, Nav, Alert } from 'react-bootstrap';
import { AuthService } from '../services'
import {Logo} from '../img'

// component Login
export default class Login extends Component {

    /**
     * constructor of Login
     * @param {*} props 
     */
    constructor(props) {

        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            userInvalid: false,
            pwInvalid: false,
            currentUser: AuthService.getCurrentUser()
        };

    }

    /**
     * handles change in username-input
     * @param {Event} e 
     */
    onChangeUsername(e) {
        this.setState({
            message: "",
            username: e.target.value,
            userInvalid: false
        });
    }

    /**
     * handles change in password-input
     * @param {Event} e 
     */
    onChangePassword(e) {
        this.setState({
            message: "",
            password: e.target.value,
            pwInvalid: false
        });
    }

    /**
     * handles login
     * @param {Event} e 
     */
    handleLogin(e) {

        e.preventDefault();

        this.setState({
            loading: true,
            message: ""
        })

        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                userInvalid: !(this.state.username),
                pwInvalid: !(this.state.password),
                loading: false
            });
            return
        }

        AuthService.login(this.state.username, this.state.password).then(() => {
            this.props.history.push("/dashboard");
            window.location.reload();
        },
            error => {
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                this.setState({
                    userInvalid: true,
                    pwInvalid: true,
                    loading: false,
                    message: resMessage
                })
            })

    }

    /**
     * render-function of Login
     */
    render() {
        const { currentUser } = this.state;

        if (currentUser != null) {
            this.props.history.push("/dashboard");
            window.location.reload();
        }
        return (
            <Container fluid>

                <Navbar className='z-100'>
                    <Navbar.Brand href='./'><img src={Logo} alt='Cryptobase' /></Navbar.Brand>
                </Navbar>

                <Row className='main-content'>
                    <Col className='d-flex'>
                        <div className='mx-auto my-auto d-inline jumbotron'>
                            <h5 className='text-center text-dark'>Sign in to Cryptobase</h5>
                            <Form className='text-center' onSubmit={this.handleLogin}>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Username" onChange={this.onChangeUsername} isInvalid={this.state.userInvalid} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Password" onChange={this.onChangePassword} isInvalid={this.state.pwInvalid} />
                                </Form.Group>
                                <Alert variant='danger' show={this.state.message}>{this.state.message}</Alert>
                                <Button variant="primary" type="submit" className='w-100 mb-1' disabled={this.state.loading}>Login</Button>
                                <Nav className="justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link disabled>Not registered yet?</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='ml-n4'>
                                        <Nav.Link href='./register'><u>Click here</u></Nav.Link>
                                    </Nav.Item>
                                </Nav>

                            </Form>
                        </div>
                    </Col>
                </Row>

            </Container >
        )
    }
}