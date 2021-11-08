import React from 'react'
import '../css/Profile.css'
import LocationIcon from '../images/geo-alt.svg'
import LinkIcon from '../images/link-45deg.svg'
import TwitterIcon from '../images/twitter.svg'
import BuildingIcon from '../images/building.svg'

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-summary">
                <div className="summary-image-container">
                    <img className="summary-image" src="https://via.placeholder.com/75" alt="Profile pic" />
                </div>
                <div className="summary-details-container">
                    <p className="summary-title">Jordan Lam</p>
                    <p className="summary-username">@MrLaam</p>
                    <p className="summary-joined-date">Joined 25 September 1990</p>
                </div>
            </div>

            <div className="profile-description-container">
                <p>Lorem ipsum half brain dfiosjfe oseijfoseijf sofjoiej fosiejf oisejf seoifj oseijfos eifjeso ijfseoifjse oifjse oifj</p>
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
                    <a className="socials-group-twitter" href="/">Not Available</a>
                </div>

                <div className="socials-group">
                    <img src={BuildingIcon} alt="Social icon"></img>
                    <a href="/">@github</a>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
