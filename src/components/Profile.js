import React, { useEffect, useState } from "react";
import "../css/Profile.css";
import LocationIcon from "../images/geo-alt.svg";
import LinkIcon from "../images/link-45deg.svg";
import TwitterIcon from "../images/twitter.svg";
import BuildingIcon from "../images/building.svg";

const Profile = ({userData}) => {
    const [formattedDate, setFormattedDate] = useState(null);
    const [createdDate, setCreatedDate] = useState(null);

    useEffect(() => {
        setFormattedDate(Date.parse(userData.created_at))

        const dateObject = new Date(formattedDate)
        const dateDay = dateObject.toLocaleString("en-US", {day: "numeric"})
        const dateMonth = dateObject.toLocaleString("en-US", {month: "long"})
        const dateYear = dateObject.toLocaleString("en-US", {year: "numeric"})
        setCreatedDate(dateDay + ' ' + dateMonth + ' ' + dateYear);
    });

  return (
    <div className="profile-container">
      <div className="profile-summary">
        <div className="summary-image-container">
          <img
            className="summary-image"
            src={userData.avatar_url}
            alt="Profile pic"
          />
        </div>
        <div className="summary-details-container">
          <p className="summary-title">{userData.name}</p>
          <a className="summary-username" href={userData.html_url}>@{userData.login}</a>
          <p className="summary-joined-date">Joined {createdDate}</p>
        </div>
      </div>

      <div className="profile-description-container">
        {!userData.bio && (<p>What a monkey</p>)}
        {userData.bio && (<p>{userData.bio}</p>)}
      </div>

      <div className="stats-container">
        <div className="stats-group">
          <h2 className="stats-group--title">Repos</h2>
          <p className="stats-group--stat">8</p>
        </div>

        <div className="stats-group">
          <h2 className="stats-group--title">Followers</h2>
          <p className="stats-group--stat">3938</p>
        </div>

        <div className="stats-group">
          <h2 className="stats-group--title">Following</h2>
          <p className="stats-group--stat">9</p>
        </div>
      </div>

      <div className="socials-container">
        <div className="socials-group">
          <img src={LocationIcon} alt="Social icon"></img>
          <a href="/">San Francisco</a>
        </div>

        <div className="socials-group">
          <img src={LinkIcon} alt="Social icon"></img>
          <a href="/">https://github.blog</a>
        </div>

        <div className="socials-group">
          <img src={TwitterIcon} alt="Social icon"></img>
          <a className="socials-group-twitter" href="/">
            Not Available
          </a>
        </div>

        <div className="socials-group">
          <img src={BuildingIcon} alt="Social icon"></img>
          <a href="/">@github</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
