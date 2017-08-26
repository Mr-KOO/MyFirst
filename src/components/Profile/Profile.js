import React from 'react';
import s from './Profile.css';
import json from '../../json/Profile.json'

class Profile extends React.Component {
	render() {
		return (
			<div className = "postMetaBar">
				<h1>{json.Title}</h1>
				<p>{json.Description}</p>
				<div className = {s.label}>
					<span>Editor of </span>
					<a className = "link" href = {this.props.editorLink}>{this.props.linkValue}</a> 
				</div>
				<div className = "avatar">
					<img src = "https://cdn-images-1.medium.com/fit/c/150/150/1*P2voWTg_tk0Ne0NKc2qf0g.jpeg" className = "avatarimg" alt = "Lee Hyungu" />
				</div>
				<div className = "buttonSet">
					<a className = "follow">
						<b>{this.props.followingNum} </b>following</a>
				</div>
				<div>
					<span>
					</span>
				</div>
			</div>
			);
	}
}

export default Profile;