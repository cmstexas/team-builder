import React, { useState } from 'react';

function Form(props) {

    const [teamMate, setState] = useState ({
        Name: "",
        Email: "",
        Role: "",
        Skill: "",
    });

    setState({
        Name: "",
        Email: "",
        Role: "",
        Skill: "",
    })


    const submitHandler = (event) => {
        event.preventDefault();
        console.log("teamMate", teamMate);
    };

    return (
        <div>
            <form onsubmit={submitHandler}>
                <div>
                    <label> Team Sign up Form</label>
                    <input>
                        type="text"
                        name="name"
                        placeholder="enter name here"
                        value={teamMate.name}
                    </input>
                    <input>
                        type="email"
                        name="email"
                        placeholder="enter email here"
                        value={teamMate.email}
                    </input>
                    <input>
                        type="text"
                        name="role"
                        placeholder="enter role here"
                        value={teamMate.role}
                    </input>
                    <input>
                        type="text"
                        name="skill"
                        placeholder="enter skill here"
                        value={teamMate.skill}
                    </input>
                </div>
                <button type="submit">Submit Now</button>
            </form>
        </div>
    )
}

export default Form;


{/* fieldset and grouping: https://www.w3schools.com/tags/tag_fieldset.asp */}