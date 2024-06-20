import SidhuFarmsimg from '../assets/SidhuFarmsimg.png'
import DJBentley from '../assets/djbentleyv2.png'
import HotSauce from '../assets/HotSauceWorld.png'


const Projects = () => {
    return (
        <div className="features" id="Projects">
            <h3 className='feature-headline'>A Few Accomplishments</h3>
            <article>
                <a href="https://sidhu-farms1.vercel.app/" className="image">
                    <img src={SidhuFarmsimg} alt="" />
                </a>
                <div className="inner">
                    <h4>Sidhu Farms</h4>
                    <p>
                        I partnered with another developer and project manager
                        to build the Sidhu Farms static site using React. My key
                        contributions included developing the crops component,
                        which involved implementing conditional rendering and
                        media queries. I also utilized Tailwind CSS to ensure
                        the site was fully responsive across various devices.
                        (Work in progress.)
                    </p>
                </div>
            </article>
            <article>
                <a href="https://www.djbentleytaylor.com/" className="image">
                    <img src={DJBentley}alt="" />
                </a>
                <div className="inner">
                    <h4>DJ Bentley Taylor</h4>
                    <p>
                        I collaborated with three developers to build a new
                        React-based site for DJ Bentley Taylor, where I
                        implemented a MixCloud music player, EmailJS-powered
                        contact form with a React modal, and integrated the
                        MixCloud API for his bio information. I was responsible
                        for deploying the site as a static one via Render.
                    </p>
                </div>
            </article>
            <article>
                <a href="https://hotsauce-world.com" className="image">
                    <img src={HotSauce} alt="" />
                </a>
                <div className="inner">
                    <h4>Hot Sauce World</h4>
                    <p>
                        Hot Sauce World is a hub for hot sauce enthusiasts. This
                        is a full stack application utilizing the following
                        stack: React, NodeJS, API built with MongoDB, and
                        authentication using Bcrypt and JWT. This site has been
                        deployed on Heroku with a custom domain. It's also
                        utilizing HTTPS using an SSL certificate provided by
                        Let's Encrypt.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Projects;
