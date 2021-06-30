import React from 'react'

export default function Card({imageUrl, userName, avatarUrl, profileUrl, title}) {
    return (
        <div className="layout card">
            
               <a href={profileUrl} className="profile_section"> 
                    <img width="25" height="25" className="avatar" src={avatarUrl} />
                    <p>{userName}</p> 
               </a>

            
            <img className="img" src={imageUrl} alt={title}/>
            
        </div>
    )
}
