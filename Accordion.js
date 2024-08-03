import React, { useState } from 'react';
import {items} from "./SampleAccordion";
import "./Accordion.css";

const Accordion = () => {
  // State to track which item is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active index
  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container'>  
      {items.map((item, index) => (
        <div key={index} className="container-block">
          <div className='button-title'>
            <h3 onClick={() => onTitleClick(index)}>{item.title}</h3>
            <button onClick={() => onTitleClick(index)}>{activeIndex === index ? '-' : '+'}</button></div>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;