import React, { useState } from 'react';

function Content() {

    const [name, setName] = useState("Guest"); 
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Sam");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const updateEmployee = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div className="content">
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age} </p>
            <button onClick={updateAge}>Set Age</button>
            
            <p>is employed: {isEmployed ? "Yes" : "No"} </p>
            <button onClick={ updateEmployee}>Is employed</button>
        </div>
       
        
    );
}


export default Content