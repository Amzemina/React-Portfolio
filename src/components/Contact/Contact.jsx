import { useState } from 'react';
import "./Contact.css"

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const validateForm = () => {
        const errors = {};
        if (!formState.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formState.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(formState.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formState.message.trim()) {
            errors.message = 'Message is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        if (validateForm()) {
            console.log('Valid');
        } else {
            console.log('Invalid');
        }

    }
    const { name, email, message } = formState;

    return (
        <section>
            <h1>Contact me</h1>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder='Message'
                        value={message}
                        onChange={handleChange}
                        rows="5"
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;
