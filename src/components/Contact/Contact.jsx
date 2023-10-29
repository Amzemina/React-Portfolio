import { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);

    }
    const { name, email, message } = formState;

    return (
        <section>
            <h1>Contact me</h1>

            <form onSubmit={handleSubmit}>
                <div className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact-form">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact-form">
                    <textarea
                        name="message"
                        placeholder='Message'
                        value={message}
                        onChange={handleChange}
                        rows="5"
                    />
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;
