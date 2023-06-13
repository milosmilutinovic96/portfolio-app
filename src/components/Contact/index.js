import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    });
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesistate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form>


                            <input type="text" name='name' placeholder='Name' required />


                            <input type="email" name='email' placeholder='Email' required />


                            <input type="text" name='subject' placeholder='Subject' required />


                            <textarea name="message" required cols="30" rows="8"></textarea>


                            <input type="submit" className='flat-button' value="SEND" />


                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;