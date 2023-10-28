import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isLoading, setIsLoading] = useState(false);
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                'service_kgqe9h8',
                'template_g9863ua',
                refForm.current,
                'ijdWeVvcPjIVNy0zT'
            )
            .then(
                (result) => {
                    

                    new Swal({
                        title: 'Success!',
                        text: 'Your message has been sent.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ffd700',
                    }).then(() => {
                        window.location.href = '/';
                    });
                },
                (error) => {
                    new Swal({
                        title: 'Error!',
                        text: 'Something went wrong. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ffd700',
                    });
                }
            )
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I am mostly interested in full-time opportunities, but I am always open to discussing new projects.
                        If you have any questions or just want to say hi, don't hestitate to reach out using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            {isLoading && <Loader type="ball-pulse-sync" className="email-loader"/>}
            <Loader type="ball-pulse-sync" />
        </>
    )
};

export default Contact;