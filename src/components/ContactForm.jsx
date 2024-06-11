import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requiredFieldError, setRequiredFieldError] = useState('');
    const [validationError, setValidationError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const regex = /^[0-9]+$/;
        // console.log(name, value)

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_4yu24wb',
                'contact_form',
                e.target, // This should be fine, as 'e' is defined in handleSubmit
                'arI1lbCnWE-Tlm6HA',
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
            setIsSubmitted(true);
            console.log(inputs);
            
            setInputs({ firstName: '', lastName: '', message: '' });
            setValidationError('');
    };

    const regex = /^[0-9]+$/;
    const isDisabled = !(inputs.firstName && inputs.lastName && inputs.message);
    const hasError = !(inputs.firstName && inputs.lastName && inputs.message);

    const onRequiredBlur = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (!isSubmitted) {
            if (value === '') {
                setRequiredFieldError(
                    'Please enter a value in required fields.',
                );
            } else {
                setRequiredFieldError('');
            }
        }
    };

    const onBlur = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (regex.test(value)) {
            setValidationError('');
        }
    };

    return (
        <div>
            <h1>Contact me</h1>
            <form onSubmit={sendEmail}>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={inputs.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        value={inputs.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </div>

                <div>
                    <textarea
                        name="message"
                        value={inputs.message}
                        onChange={handleChange}
                        placeholder="Message"
                    />
                </div>
                <button type="submit" className="btn" disabled={isDisabled}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
