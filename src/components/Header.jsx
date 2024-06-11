// import "./App.css"
import skyline from '../assets/skyline.jpeg'
import newHeadshot from '../assets/2023Headshot.png'


 const Header = () => {
    return (
        <div>
            <span className="image avatar"><img src={newHeadshot} alt="" /></span>
            <img src={skyline} alt="" />
		<h1>Ashley McKellar</h1>
		
		
		</div>
	
    )
}

export default Header