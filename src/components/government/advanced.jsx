import React from "react";
import '../careerpath/component.css';
export function Advanced({ advance, reset }) {
    return (
        <>
            <button onClick={reset} className="back">Back</button>
            <h1 className="tags">Career paths</h1>
            <ul className="dbox">
                {
                    advance.career_paths.map((adv, index) => (
                        <li key={index} className="dlst">{adv.name}<br /><br />Description : {adv.description}<br /><br />Salary : {adv.salary}<br /><br />growth_opportunities : {adv.growth_opportunities}<br />{ }</li>
                    ))
                }

            </ul>
            <h1 className="tags">Preparation tips</h1>
            <ul className="dbox">
                {
                    advance.preparation_tips.map((adv, index) => (
                        typeof adv === "string" ? (
                            <li key={index} className="dlst">{adv}</li>
                        ) :
                            (
                                <li key={index} className="dlst">{adv.tip}<br></br>{adv.explanation}</li>
                            )

                    ))
                }

            </ul>
            <h1 className="tags">Entrance exams</h1>
            <ul className="dbox">
                {
                    advance.entrance_exams.map((adv, index) => (
                        <li key={index} className="dlst">{adv.name}<br /><br />{adv.description}<br /></li>
                    ))
                }

            </ul>
        </>
    )
}