import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faHtml5, faLaravel, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        index={15}
                    />
                </h1>
                <p>I'm an ambitious fullstack developer looking for a role in an established IT company,
                    where I could apply my skills and knowledge to help the company grow while working on
                    challenging projects.</p>
                <p>I believe that there is no task too hard to handle and I'm always ready to learn new things and improve my skills, 
                    as continuous learning is the key to success, especially in programming.</p>
                <p>If I were to describe myself in one sentence it would be a
                    a coffee-driven e-sport enthusiast, music lover and technology geek.</p>
            </div>

            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faVuejs} color="#41b883"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faLaravel} color="#f05340"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
};

export default About;