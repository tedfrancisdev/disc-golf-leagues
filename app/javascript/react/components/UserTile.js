import React from 'react'

const UserTile = (props) => {
  return (
    <div className="about-the-user">
      <h3 className="user-title">About Me</h3>
      <div className="row">
        <div className="small-12 medium-4 columns">
        </div>
        <div className="small-12 medium-8 columns">
          <h4 className="separator-left">{props.first_name} {props.last_name}</h4>
          <p>Location: {props.location} | Skill Level: {props.skill_level}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.</p>
        </div>
      </div>
    </div>
  )
}

export default UserTile