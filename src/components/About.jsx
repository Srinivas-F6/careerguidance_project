import React from "react";

export function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">Detailed Information about career path page</h1>
            <ol className="about-list">
                <li>
                    On the Career Path page, the information is arranged in a structured, layered format that makes it easy for students to explore
                    their future options step by step.
                </li>
                <li>
                    The journey begins with the first layer, which displays the main streams available after Class 10 — Science, Commerce, Arts, Diploma, and Vocational courses.
                </li>
                <li>
                    Once a stream is chosen, the student moves into the second layer, which presents the branches under
                    that stream. For example, if a student selects Science, they will see branches like MPC (Maths, Physics, Chemistry), BiPC (Biology, Physics,
                    Chemistry), or MEC (Maths, Economics, Commerce). Similarly, Commerce may open up to CEC (Civics, Economics, Commerce) or MEC. This layer helps
                    students refine their choices by narrowing the stream into specific subject combinations.
                </li>
                <li>
                    The third layer is the most detailed and informative part of the system. Here, each branch expands into possible career paths. For example, MPC can
                    lead to Engineering, Architecture, or Defence careers, while BiPC can open opportunities in Medicine, Pharmacy, Agriculture, or Life Sciences.
                </li>
                <li>
                    Along with each career path, students can also find information about the entrance exams required to pursue that career (such as JEE for
                    Engineering or NEET for Medicine).
                </li>
                <li>
                    Additionally, every career path includes a “Recommended For” section that explains what kind of students
                    might be most suited for it. For example, Engineering may be recommended for students who enjoy problem-solving and logical thinking, while
                    Medicine may suit those interested in biology and helping others.
                </li>
                <li>
                    This layered structure ensures that students don’t feel overwhelmed. They can start broadly by selecting a stream,
                    then gradually narrow down to branches, and finally explore detailed career paths with their requirements and suitability. This step-by-step
                    approach makes the process of career guidance more organized, clear, and personalized.
                </li>
            </ol>

            <h1 className="about-heading">Detailed Information about government path page</h1>
            <ol className="about-list">
                <li>
                    On the Government Path page, the information is arranged in a structured, two-layer format that makes it easy for students to
                    explore government career opportunities step by step.
                </li>
                <li>
                    The first layer displays all major government exams that students can pursue after Class 10 and higher qualifications, such as
                    APPSC Group 1, APPSC Group 2, SSC CGL, UPSC Civil Services, and more.
                </li>
                <li>
                    For each exam, students can find detailed information including the purpose of the exam, duration, eligibility criteria,
                    and exam type. This layer helps students start broadly by understanding which exams match their interests, skills, and
                    qualifications.
                </li>
                <li>
                    Once an exam is selected, the second layer provides information about the jobs that can be obtained by clearing that exam.
                    For example, clearing APPSC Group 1 can lead to positions such as Deputy Collector, Assistant Commissioner, or other
                    administrative roles. For each job, students can explore the role description, salary, career growth opportunities, and other benefits.
                </li>
                <li>
                    This layer also includes preparation tips and details of required entrance exams.
                    It provides guidance to help students plan their journey effectively.
                </li>
                <li>
                    This structured form ensures clear understanding. Students can start broadly by selecting a government exam, then gradually
                    explore the jobs associated with that exam, along with their requirements, salary, and career growth. This step-by-step approach
                    makes government career guidance more organized, clear, and practical.
                </li>
            </ol>

            <style>
                {
                    `.about-container {
  margin-left: 60px;
  margin-right: 50px;
  padding: 10px;
}

.about-heading {
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.6rem;
  font-weight: bold;
  color: cyan;
}

.about-list {
  margin-left: 20px;
  margin-bottom: 30px;
  line-height: 1.6;
}



@media (max-width: 478px) {
  .about-container {
    margin: 15px;
    padding: 6px;
  }

  .about-heading {
    font-size: 1.2rem;
    text-align: center;
    margin-top:10px;
    margin-bottom:5px;
    color: cyan;
  }

  .about-list {
    margin-left: 10px;
    font-size: 0.8rem;
    line-height: 1.6;
    margin-bottom:10px;
  }
}
`
                }
            </style>
        </div>
    );
}
