import logo from '../instagram_logo.jpg'; 
import homeIcon from '../home_icon.jpeg'; 
import messagesIcon from '../messages_icon.jpeg'; 
import newPostIcon from '../newpost_icon.jpeg'; 
import feedIcon from '../feed_icon.jpeg'; 
import likeIcon from '../like_icon.jpeg'

const Header = () => {
    return (
        <header className='HeaderSection'>
            <img src={logo} alt="Instagram Logo" className='Logo'/>
            
            <input placeholder='Search' className='SearchBar'>
            </input>
            <div className='ButtonDiv'>

                <button className='HomeButton'>
                    <img src={ homeIcon } alt="Home Icon" className='HomeIcon'></img>
                </button>

                <button className='MessagesButton'>
                    <img src={ messagesIcon } alt="Message Icon" className='MessageIcon'></img>
                </button>

                <button className='NewpostButton'>
                    <img src={ newPostIcon } alt="Newpost Icon" className='NewpostIcon'></img>
                </button>

                <button className='FeedButton'>
                    <img src ={ feedIcon } alt="Feed Icon" className='FeedIcon'></img>
                </button>

                <button className='LikeButton'>
                    <img src={ likeIcon } alt="Like Icon" className='LikeIcon'></img>
                </button>

                <button className='UserProfileButton'>
                </button>
            </div>
        </header>
    
    )
}; 

export default Header; 