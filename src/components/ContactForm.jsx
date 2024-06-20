import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FormModal from './FormModal';

const ContactForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requiredFieldError, setRequiredFieldError] = useState('');

    const isDisabled = !(inputs.name && inputs.email && inputs.message);

    const hasError = !(inputs.name && inputs.email && inputs.message);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log('showModal updated:', showModal);
    }, [showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_4yu24wb',
                'contact_form',
                e.target,
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
        handleOpenModal();
        console.log(showModal);

        console.log('submitted form!');

        setInputs({ name: '', email: '', subject: '', message: '' });
    };

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

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'name' && value === '') {
            setRequiredFieldError('Name is a required field.');
        } else if (name === 'email' && value === '') {
            setRequiredFieldError('Email address is a required field');
        } else if (name === 'message' && value === '') {
            setRequiredFieldError('Message is a required field.');
        } else {
            setRequiredFieldError('');
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="contact-div-parent">
            <div className="contact-div" id="Contact">
                <h3>Contact me</h3>
                <p>Interested in working with me? Let's get in touch.</p>
                <div className="form-div">
                    <form onSubmit={sendEmail}>
                        <div className="requiredParent">
                            <p className="required-field">* Required field</p>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={inputs.name}
                                    onChange={handleChange}
                                    placeholder="Name *"
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={inputs.email}
                                    onChange={handleChange}
                                    placeholder="Email *"
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={inputs.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={inputs.message}
                                onChange={handleChange}
                                placeholder="Message *"
                                onBlur={handleBlur}
                                rows="4"
                                required
                            />
                          
                        </div>
                        {hasError && (
                                <div className="validation-error">
                                    <h3>{requiredFieldError}</h3>
                                </div>
                            )}
                        <div className="button-div">
                            <button
                                type="submit"
                                className="btn"
                                disabled={isDisabled}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <FormModal
                        show={showModal}
                        handleClose={handleCloseModal}
                        setShowModal={setShowModal}
                    ></FormModal>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
