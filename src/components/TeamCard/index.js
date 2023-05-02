// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, teamImageUrl, id} = teamDetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-card">
          <img src={teamImageUrl} alt={`${name}`} className="team-img" />
          <h1 className="Team-name">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
