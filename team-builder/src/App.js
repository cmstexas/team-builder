
import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Member from "./Member";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState([]);

  const submitMember = member => setMembers([...members, member]);
  const update = uMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === uMember.id) {
          return uMember;
        }
        return member;
      })
    ]);

  console.log("members", members);

  return (
    <div className = "member-list">
       <h1> Sign Up to Join the Team </h1>
     <Form add={submitMember} />
      <h1>Our Current Team Members</h1>
      {members.map((member, index) => (
       <Member key={index} member={member} update={update} />
     ))}
    </div>
  );
}

export default App;







// OLD CODE
// import React, { useState} from 'react';
// // import { BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
// import Member from "./components/Member";
// import Form from './Form';


// function App() {
//   const [members, setMembers] = useState([]);

//   const submitMember = member => setMembers([...members, member]);
//     const update = uMember =>
//       setMembers([
//         ...members.map(member => {
//           if (member.id === uMember.id) {
//             return uMember;
//           }
//           return member;
//         })
//       ])
//   };

//   console.log("members", members);


//   return (
//     <div className = "member-list">
//       <h2> Sign Up to Join the Team </h2>
//       <Form add={submitMember} />
//       <h1>Our Current Team Members</h1>
//      {members.map((member, index) => (
//        <Member key={index} member={member} update={update} />
//      ))}
//     </div>
//     );

// export default App;



