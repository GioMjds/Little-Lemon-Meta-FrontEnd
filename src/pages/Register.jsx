/* eslint-disable react/prop-types */
import { useState } from "react"
import '../styles/login.css';
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRegister = e => {
        e.preventDefault();

        const { firstName, lastName, email, mobileNumber, password, confirmPassword } = formData;

        if (firstName && lastName && email && mobileNumber && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('Registration successful');
                setIsLoggedIn(true);
            } else alert('Passwords do not match. Please try again');
        } else alert('Please fill all fields.');
    };

    const handleLoginRedirect = () => navigate('/login');

    return (
        <div className="login-container">
            <h1>Register</h1>
            <form onSubmit={handleRegister} className="login-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile No:</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Register</button>
                <span className="toggle-link" onClick={handleLoginRedirect}>
                    Already have an account? Login here
                </span>
            </form>
        </div>
    )
}

export default Register