import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCodeSandboxCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function SignupForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPassword: ''
    });
    const [validated, setValidated] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            console.log('Form Data:', formData);
            localStorage.setItem("usersData", JSON.stringify(formData));
        }
        setValidated(true);
    };

    return (
        <div className='MainFormDiv'>
            <div className='signupForm'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <AiFillCodeSandboxCircle className='signupTopIcon' size={50} />
                    <Form.Group className="mb-4" style={{ width: "100%" }} controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                            placeholder="Enter Name"
                            className='signupInputs'
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: "100%" }} controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                            placeholder="Enter Email"
                            className='signupInputs'
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: "100%" }} controlId="formBasicPassword">
                        <InputGroup>
                            <Form.Control
                                type={passwordVisible ? "text" : "password"}
                                name="userPassword"
                                value={formData.userPassword}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className='signupInputs'
                                required
                                minLength="6"

                            />
                            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </Button>
                            <Form.Control.Feedback type="invalid">
                                Please enter a password with at least 6 characters.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='signupBtn'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default SignupForm;
