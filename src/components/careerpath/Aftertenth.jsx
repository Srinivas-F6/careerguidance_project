import React, { useState } from "react";
import './component.css';
export function Aftertenth({ afterTenth, onClickExplore }) {
  return (
    <>
      <h2 className="tags">Career and Academic Pathways after Grade 10</h2>
      <ul className="box">
        {afterTenth.map((tenth, index) => (
          <li key={index} className="lst">
            Course_name: {tenth.name}<br/><br/> Duration: {tenth.duration}<br/><br/> Description: {tenth.purpose}<br/>
            <button onClick={() => { onClickExplore(tenth) }} className="explore">Explore</button>
          </li>
        ))}
      </ul>
    </>
  );
}

