import React from "react";
import '../careerpath/component.css';
export function Basicdetails({ begin, onClickExplore }) {
    return (
        <>
            <ul className="box">
                {
                    begin.map((start, index) => (
                        <li key={index} className="lst">
                            {start.name}<br /><br />Purpose : {start.purpose}<br /><br />Duration : {start.duration}<br /><br />Eligibility : {start.eligibility}<br /><br />Exam_type : {start.exam_type}
                            <button onClick={() => { onClickExplore(start) }} className="explore">Explore</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}