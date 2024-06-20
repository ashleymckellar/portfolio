// import "./App.css"
import skyline from '../assets/skyline.jpeg';

const Header = () => {
    return (
        <div>
            <header className="header">
                <img className="header-img" src={skyline} alt="" />
            </header>
        </div>
    );
};

export default Header;
