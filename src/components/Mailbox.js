import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import'./mailbox.css'

const mailIdFrom = [
  { label: "admin@gmail.com", value: "admin@gmail.com" },
  { label: "hrmaneger@gmail", value: "hrmaneger@gmail" },
  
];

const mailIdTo = [
    { label: "gavarladurgaprasad@gmail.com", value: "gavarladurgaprasad@gmail.com" },
    { label: "suresh@gmail.com", value:"suresh@gmail.com" },
    { label: "teja@gmail.com", value:"teja@gmail.com" },
  ];
  
  
const Example = () => {

  const [selectedfrom, setSelectedfrom] = useState([]);
  const [selectedto, setSelectedto] = useState([]);
  <pre>{JSON.stringify(selectedfrom)}</pre>
  // console.log(<pre>{JSON.stringify(selectedto)}</pre>)
  // console.log(selectedfrom.value)
   console.log(selectedto)
  console.log(selectedfrom)
  return (
    <div className="headermail">
    <div className="multiSelect">
     <div className="email From">
      <h3>Select Email Id From</h3>
      <MultiSelect 
        options={mailIdFrom}
        value={selectedfrom}
        onChange={setSelectedfrom}
        labelledBy="Select"
      />
      </div>

      <div className="email To">
      <h3>Select Email Id To</h3>
      <MultiSelect 
        options={mailIdTo}
        value={selectedto}
        onChange={setSelectedto}
        labelledBy="Select"
      />
      </div>  
    
    </div>
    </div>

  );
   
};

export default Example;
