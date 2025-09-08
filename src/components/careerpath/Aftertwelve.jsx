import React from "react";
import './component.css';
export function Aftertwelve({ afterTwelve, onClickExplore, onClickReset }) {
   return (
      <>
         <button onClick={onClickReset} className="back">Back</button>
         <h2 className="tags">Academic and Career Streams after Grade 10</h2>
         <ul className="box">{
            afterTwelve.streams.map((twelve, index) => (
               <li key={index} className="lst">Branch: {twelve.name}<br /><br />Description: {twelve.description}<br />
                  <button onClick={() => { onClickExplore(twelve) }} className="explore">Explore</button>
               </li>
            ))
         }
         </ul>

      </>
   )

}