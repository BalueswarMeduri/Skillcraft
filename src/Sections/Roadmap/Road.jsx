import React from "react";
import "./roadstyle.css";

const Road = () => {
    const roadmap = [
        { category: "Data Structures & Algorithms (DSA)", duration: "3-6 Months", video: "#", documentation: "#" },
        { category: "Development (Frontend & Backend)", duration: "6-9 Months", video: "#", documentation: "#" },
        { category: "Core Subjects (DBMS, OS, CN)", duration: "2-4 Months", video: "#", documentation: "#" },
        { category: "System Design (Low-Level & High-Level)", duration: "3-6 Months", video: "#", documentation: "#" },
        { category: "Aptitude & Problem Solving", duration: "Ongoing", video: "#", documentation: "#" },
    ];

    return (
        <>
            <div className="main-container">
                <div className="web-title">Software Development Roadmap</div>
                <div className="web-table-container">
                    <table className="web-table">
                        <thead className="table-head">
                            <tr>
                                <td>Status</td>
                                <td>Category</td>
                                <td>Duration</td>
                                <td>Video Resource</td>
                                <td>Documentation</td>
                            </tr>
                        </thead>
                        <tbody>
                            {roadmap.map((step, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td className="lang-column">{step.category}</td>
                                    <td>{step.duration}</td>
                                    <td>
                                        <a href={step.video} target="_blank" rel="noopener noreferrer">
                                            #
                                        </a>
                                    </td>
                                    <td>
                                        <a href={step.documentation} target="_blank" rel="noopener noreferrer">
                                            #
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

export default Road;
