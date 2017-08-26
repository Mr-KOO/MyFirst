import React from 'react';
import logo from '../../img/logo.svg';
import searchIcon from '../../img/searchIcon.svg';
import notiIcon from '../../img/notiIcon.svg';
import s from './Header.css';

class Header extends React.Component {
    render(){
        return (
        	<div className = "metabar">
	        	<div className = "metabar-block">
	        		<a>Write a story</a>
	        		<a href = "https://medium.com" className = "siteNav-logo" alt = "Medium">
	        		    <img src={logo} className="svgIcon-use" alt="logo" />	
	        		</a>
	            </div>
	            <div className="buttonSet">
	            	<a>
	            		<img src={searchIcon} className="svgIcon-use" alt="logo" />         		
	            	</a>
	            	<a>
	            		<img src={notiIcon} className="svgIcon-use" alt="logo" />         		
	            	</a>
	            	<a>
	            		<img src="https://cdn-images-1.medium.com/fit/c/48/48/0*661xPjkhrX9h6GVR." className="avatar-image avatar-image--icon" alt="이현구" />
	            	</a>
	            </div>
            </div>
        );
    }
}

export default Header;