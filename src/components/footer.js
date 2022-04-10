import React from 'react';
import msgIcon from '../assets/images/message.png';
import gitIcon from '../assets/images/github.png';
import phoneIcon from '../assets/images/telephone.png';
import linkedIcon from '../assets/images/linkedin.png';

export default function ContactMe() {
    return (
        <div>
            <section id="contact-me" className="default-tag-structure">
                <ul className="contact-icons-list">
                    <li>
                        <a href="mailto: pearsonaaron.56@gmail.com"><img className="icons" src={msgIcon}
                            alt="Email icon" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/AaronPearson1" target="_blank" rel="noreferrer"><img className="icons" src={gitIcon}
                            alt="Github icon" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aaroncpearson/" target="_blank" rel="noreferrer"><img className="icons"
                            src={linkedIcon} alt="Linkedin icon" /></a>
                    </li>
                    <li>
                        <a href="tel:1234567890"><img className="icons" src={phoneIcon} alt="Telephone icon" /></a>
                    </li>
                </ul>
            </section>
        </div>
    )
}