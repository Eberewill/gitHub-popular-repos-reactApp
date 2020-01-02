import React from 'react';
import '../components/Language.css'


function Languages(props) {
  return (
    <div className="mylist">
        <h2>Languages</h2>

<ul>
            {props.Languagelist.map((name)=>(
                <li key ={name}> 
                <a onClick = { () => props.HandlesellectProgram(name)}>{name}</a>
                  
                
                </li>
            ))}
        </ul>
      
    </div>
  );
}

export default Languages;
