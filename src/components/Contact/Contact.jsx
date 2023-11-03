//Contact component


import { useState, useRef } from 'react';
//contact stylesheet
import "./Contact.css"

//contact form
function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [formIsValid, setFormIsValid] = useState({
        name: true,
        email: true,
        message: true,
    });
    const formRef = useRef(null);

    //handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    //validate form fields
    const handleBlur = (field) => {
        let isValid;
        const errors = {};
        switch (field) {
            case 'email':
                isValid = isValidEmail(formState[field]);
                setFormIsValid({ ...formIsValid, [field]: isValid });
                if (!formState.email.trim()) {
                    errors.email = 'Email is required';
                } else if (!isValid) {
                    errors.email = 'Invalid email address';
                }
                setErrors(errors);
                break;
            default:
                isValid = formState[field].trim() !== '';
                setFormIsValid({ ...formIsValid, [field]: isValid });
               
                break;
        }
    };
    //validate email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    //destructure formState
    const { name, email, message } = formState;

    return (
        <section>
            <h1>Contact me</h1>

            <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                    />
                    {formIsValid.name === false && <p className="error">name is required</p>}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder='Message'
                        value={message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        rows="5"
                    />
                    {formIsValid.message === false && <p className="error">message is required</p>}
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;
