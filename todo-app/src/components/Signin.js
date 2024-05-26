import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { AiFillCodeSandboxCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './main.scss';


function SignupForm() {
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/signup');
    };
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        userPassword: ''
    });
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');

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
            const storedData = JSON.parse(localStorage.getItem("usersData"));
            if (storedData && storedData.userName === formData.userName && storedData.userPassword === formData.userPassword) {
                alert('User authenticated successfully');
                navigate('/todoApp');
            } else {
                setError('Invalid username or password');
            }
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
                <button className='linkBtn' onClick={navigateToSignup}>Not have an account? Signup </button>
            </div>
        </div>
    );
}

export default SignupForm;
