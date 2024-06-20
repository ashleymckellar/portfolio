import newHeadshot from '../assets/2023Headshot.png';
import { Link, animateScroll as scroll } from 'react-scroll';

import { useState } from 'react';
import githubIcon from '../assets/icons8-github-64.png';
import emailIcon from '../assets/icons8-email-50.png';
import linkedInIcon from '../assets/icons8-linkedin-50.png';
// import { faGithub } from '@awesome.me/kit-KIT_CODE/icons'

const Sidebar = () => {
    const [clickedLink, setClickedLink] = useState('');

    const handleSetClicked = (link) => {
        setClickedLink(link);
    };
    return (
        <div className="sidebar">
            <div className="image-avatar">
                <img src={newHeadshot} alt="" />
            </div>
            <div className="sidebar-text-div">
                <p className="sidebar-text">Ashley McKellar</p>

                <Link
                    activeClass="active"
                    className={`nav-link ${
                        clickedLink === 'Summary' ? 'clicked-link' : ''
                    }`}
                    to="Summary"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                >
                    About
                </Link>

                <Link
                    activeClass="active"
                    className={`nav-link ${
                        clickedLink === 'Projects' ? 'clicked-link' : ''
                    }`}
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                >
                    A Few Accomplishments
                </Link>
                <Link
                    activeClass="active"
                    className={`nav-link ${
                        clickedLink === 'Contact' ? 'clicked-link' : ''
                    }`}
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                >
                    Contact
                </Link>
                <div className="social-icons-div">
                    <a
                        href="https://github.com/ashleymckellar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={githubIcon}
                            alt="GitHub"
                            className="social-icons"
                        />
                    </a>
                    <a
                        href="mailto:ashley.l.mckellar@gmail.com"
                        className="emailLink"
                    >
                        <img src={emailIcon} alt="Email" className="social-icons"/>
                    </a>
                    <a
                        href="https://linkedin.com/in/ashley-mckellar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedInIcon}
                            alt="LinkedIn"
                            className="social-icons"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
