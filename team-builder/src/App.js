import React, { useState} from 'react';
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
import TeamData from './TeamData';
import Form from './Form';


const Teammembers = () => {
  const [team, setTeam] = useState(TeamData);
  console.log(team)

  const formChange = newMember => {
    setTeam([...team, newMember]);
  };

  // const team = response.data.results;
  // setTeam(team);

  return (
    <div className = "member-list">
      <h2> Sign Up to Join the Team </h2>
      <Form teamAdd={formChange} />
      <h1>Our Current Team Members</h1>
    <div>
     {team.map((member, index) => {
       return (
        <p>
          {team.name}
          {team.email}
          {team.role}
          {team.skill}
        </p>
       )
     })}
    </div>
  </div>
    );
}

export default Teammembers;




// import React, { useState} from 'react';
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
// import TeamData from './TeamData';


// export default function App() {
//   const [name, setName] = useState( [] );

//   return (
//   <Router>
//    <div>
//      <TeamData list={TeamData} />
//        <Route path='/' exact component={TeamData} />
//    </div>
//  </Router>
//   );
// }
