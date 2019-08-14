
import React, { useState } from "react";

const Member = props => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "",
    id: null
  });

  const inputHandler = e => {
    console.log("target name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.add({ ...input, id: Math.random() });
    setInput({
      name: "",
      email: "",
      role: "",
      id: null
    });
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <form onSubmit={submitHandler}>
      <h1>Add Member</h1>
      <div>
        <label htmlFor="Name">
          Name:{" "}
          <input
            type="text"
            value={input.name}
            onChange={inputHandler}
            name="name"
          />
        </label>
        <label htmlFor="Email">
          Email:{" "}
          <input
            type="text"
            value={input.email}
            onChange={inputHandler}
            name="email"
          />
        </label>
        <label htmlFor="Role">
          Role:{" "}
          <input
            type="text"
            value={input.role}
            onChange={inputHandler}
            name="role"
          />
        </label>
      </div>
      <button className="formbutton">Add Member</button>
    </form>
  );
};

export default Member;




// OLD CODE
// import React, { useState } from 'react';

// const Member = props => {
//     const [input, setInput] = useState ({
//         name: "",
//         email: "",
//         role: "",
//         skill: "",
//         id: null
//     });

//     // setState({
//     //     Name: "",
//     //     Email: "",
//     //     Role: "",
//     //     Skill: "",
//     // })

//     const inputHandler = event => {
//         console.log("target name", event.target.name);
//         console.log("value", event.target.value);
//         setInput({ ...input, [event.target.name]: event.target.value });
//     };


//     const submitHandler = (event) => {
//         event.preventDefault();
//         props.add({ ...input, id: Math.random() });
//         setInput({
//             name: "",
//             email: "",
//             role: "",
//             skill: "",
//             id: null
//         });
//     };
//     console.log("props", props);
//     console.log("input", input);

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <div>
//                     <h1> Team Sign up Form</h1>
//                     <label htmlFor="Name">
//                     Name:{" "}
//                     <input>
//                         type="text"
//                         name="name"
//                         placeholder="enter name here"
//                         value={input.name}
//                         onChange={inputHandler}
//                     </input>
//                     </label>
//                     <label htmlFor="Email">
//                     Email:{" "}
//                     <input>
//                         type="email"
//                         name="email"
//                         placeholder="enter email here"
//                         value={input.email}
//                         onChange={inputHandler}
//                     </input>
//                     </label>
//                     <label htmlFor="Role">
//                     Role:{" "}
//                     <input>
//                         type="text"
//                         name="role"
//                         placeholder="enter role here"
//                         value={input.role}
//                         onChange={inputHandler}
//                     </input>
//                     </label>
//                     <label htmlFor="Skill">
//                     Skill:{" "}
//                     <input>
//                         type="text"
//                         name="skill"
//                         placeholder="enter skill here"
//                         value={input.skill}
//                         onChange={inputHandler}
//                     </input>
//                     </label>
//                 </div>
//                 <button type="submit">Add New Member</button>
//             </form>
//         </div>
//     )
// }

// export default Member;


// {/* fieldset and grouping: https://www.w3schools.com/tags/tag_fieldset.asp */}