import React, { useState } from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);

 window.onscroll = ()=>{
    setIsScrolled(document.documentElement.scrollTop === 0? false:true);
    return ()=> (window.onscroll=null)
 }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>TV Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Children</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar