import React from "react";
import './component.css';
export function Destionation({ dest, onClickReset }) {
    return (
        <>
            <button onClick={onClickReset} className="back" >Back</button>
            <h2 className="tags">Higher Education and Career Opportunities after Class 12</h2>
            <ul className="dbox">
                {
                    dest.career_paths.map((destination, index) => (
                        <li key={index} className="dlst">{destination.name} <br /> {destination.description}</li>
                    ))
                }
            </ul>
            {dest.ideal_for_students_interested_in && (
                <>
                    <h2 className="tags">Recommended for students interested in</h2>
                    <ul className="dbox">
                        {
                            dest.ideal_for_students_interested_in.map((idea, index) => (
                                <li key={index} className="dlst">{idea}</li>
                            ))
                        }
                    </ul>
                </>
            )}

            {
                dest.entrance_exams ?
                    (
                        <>
                            <h2 className="tags">Entrance test for higher education courses after Class 12</h2>
                            <ul className="dbox">
                                {
                                    dest.entrance_exams.map((exam, index) => (
                                        typeof exam === "string" ? (
                                            <li key={index} className="dlst">{exam}</li>
                                        ) :
                                            <li key={index} className="dlst">{exam.name}<br />{exam.description}</li>
                                    ))
                                }
                            </ul>
                        </>
                    ) : (<p>There is No entrance exam</p>)

            }

        </>
    )
}