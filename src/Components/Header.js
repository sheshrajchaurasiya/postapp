import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router-dom';

const Header = ()=>{
    const location= useLocation();

    return(
        <div className="main-header">
            <div className="header-text">TravelMedia.in</div>
            <div className="navbar">
                    <HomeIcon  className={`icon ${location.pathname === '/' ? 'active' : ''}`}/>
                    <NotificationsIcon className="icon" />
                    <BookmarkIcon className={`icon ${location.pathname !== '/' ? 'active' : ''}`}/>
                    <PersonIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header;