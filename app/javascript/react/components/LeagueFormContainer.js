import React, { useState } from "react"

const LeagueFormContainer = (props) => {
  const [newLeague, setNewLeague] = useState({
    league_name: "",
    location: "",
    description: ""
  });
  
  const handleChange = event => {
    setNewLeague({
      ...newLeague,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    props.addNewLeague(newLeague);
    setNewLeague({
      league_name: "",
      location: "",
      description: ""
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="new-league-form callout">
      <label>
        League Name:
        <input
          name="league_name"
          id="league_name"
          type="text"
          onChange={handleChange}
          value={newLeague.league_name}
        />
      </label>
      <label>
        Location:
        <input
          name="location"
          id="location"
          type="text"
          onChange={handleChange}
          value={newLeague.location}
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleChange}
          value={newLeague.description}
        />
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default LeagueFormContainer