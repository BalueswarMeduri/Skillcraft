//Code for WebDev component
import React, { useState, useEffect } from "react";
import "./TableStyling.css";

const WebDev = () => {
    const initialProblems = [
        { lang: "HTML", duration: "1 Week", video: "https://youtu.be/UB1O30fR-EE", documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { lang: "CSS", duration: "1 Week", video: "https://youtu.be/yfoY53QXEnI", documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { lang: "JavaScript Basics", duration: "2-3 Weeks", video: "https://youtu.be/W6NZfCO5SIk", documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { lang: "JavaScript Advanced", duration: "2-3 Weeks", video: "https://youtu.be/PkZNo7MFNFg", documentation: "https://javascript.info/" },
        { lang: "Responsive Design", duration: "1 Week", video: "https://youtu.be/srvUrASNj0s", documentation: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
        { lang: "Version Control (Git)", duration: "1 Week", video: "https://youtu.be/RGOj5yH7evk", documentation: "https://git-scm.com/doc" },
        { lang: "Bootstrap/Frameworks", duration: "1 Week", video: "https://youtu.be/-qfEOE4vtxE", documentation: "https://getbootstrap.com/docs/" },
        { lang: "ReactJS Basics", duration: "3 Weeks", video: "https://youtu.be/bMknfKXIFA8", documentation: "https://reactjs.org/docs/getting-started.html" },
        { lang: "ReactJS Advanced", duration: "2-3 Weeks", video: "https://youtu.be/4UZrsTqkcW4", documentation: "https://reactjs.org/" },
        { lang: "Node.js Basics", duration: "3 Weeks", video: "https://youtu.be/TlB_eWDSMt4", documentation: "https://nodejs.org/en/docs/" },
        { lang: "MongoDB Basics", duration: "2 Weeks", video: "https://youtu.be/EE8ZTQxa0AM", documentation: "https://www.mongodb.com/docs/" },
        { lang: "REST APIs", duration: "2 Weeks", video: "https://youtu.be/Q-BpqyOT3a8", documentation: "https://www.restapitutorial.com/" },
        { lang: "Deployment (Netlify/Heroku)", duration: "1 Week", video: "https://youtu.be/7BMQ2vDmlgM", documentation: "https://www.netlify.com/blog/" },
    ];

    const [problems, setProblems] = useState(() => {
        const saved = localStorage.getItem("webDevProgress");
        return saved ? JSON.parse(saved) : initialProblems.map(problem => ({ ...problem, completed: false }));
    });

    useEffect(() => {
        localStorage.setItem("webDevProgress", JSON.stringify(problems));
    }, [problems]);

    const handleCheckboxChange = (index) => {
        const updatedProblems = [...problems];
        updatedProblems[index].completed = !updatedProblems[index].completed;
        setProblems(updatedProblems);
    };

    return (
        <>
            <div className="main-container">
                <div className="web-title">Web Development</div>
                <div className="web-table-container">
                    <table className="web-table">
                        <thead className="table-head">
                            <tr>
                                <td>Status</td>
                                <td>Language</td>
                                <td>Duration</td>
                                <td>Video Resource</td>
                                <td>Documentation</td>
                            </tr>
                        </thead>
                        <tbody>
                            {problems.map((problem, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={problem.completed}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    </td>
                                    <td className="lang-column">{problem.lang}</td>
                                    <td>{problem.duration}</td>
                                    <td>
                                        <a href={problem.video} target="_blank" rel="noopener noreferrer" className="text-cyan-600">
                                            Video
                                        </a>
                                    </td>
                                    <td>
                                        <a href={problem.documentation} target="_blank" rel="noopener noreferrer">
                                            📃Documentation
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default WebDev;
