// Code for CyberSecurity component
import React, { useState, useEffect } from "react";
import "./TableStyling.css";

const CyberSecurity = () => {
    const initialProblems = [
        { lang: "Introduction to Cybersecurity", duration: "1 Week", video: "https://youtu.be/KAS01FFj1fQ", documentation: "https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html" },
        { lang: "Networking Basics", duration: "2 Weeks", video: "https://youtu.be/qiQR5rTSshw", documentation: "https://www.comptia.org/content/articles/what-is-networking" },
        { lang: "Operating Systems Security", duration: "2 Weeks", video: "https://youtu.be/aHie8rVwXXY", documentation: "https://www.redhat.com/en/topics/security/what-is-operating-system-security" },
        { lang: "Cryptography Basics", duration: "2 Weeks", video: "https://youtu.be/6x7TZHWuUss", documentation: "https://cryptobook.nakov.com/" },
        { lang: "Web Application Security", duration: "2 Weeks", video: "https://youtu.be/yPrz9KyvHNA", documentation: "https://owasp.org/www-project-top-ten/" },
        { lang: "Penetration Testing Basics", duration: "3 Weeks", video: "https://youtu.be/JzjEOgb7dpI", documentation: "https://tryhackme.com/" },
        { lang: "Vulnerability Assessment", duration: "2 Weeks", video: "https://youtu.be/h_WZ7cxTtHk", documentation: "https://www.cisa.gov/vulnerability-assessment" },
        { lang: "Incident Response and Forensics", duration: "2 Weeks", video: "https://youtu.be/TFS8xj3Yajc", documentation: "https://resources.infosecinstitute.com/topic/cyber-forensics/" },
        { lang: "Malware Analysis Basics", duration: "3 Weeks", video: "https://youtu.be/ZtIbVSP5eFg", documentation: "https://malwareunicorn.org/workshops/re101.html" },
        { lang: "Cybersecurity Tools and Techniques", duration: "2 Weeks", video: "https://youtu.be/GiBxEUP70UQ", documentation: "https://www.varonis.com/blog/cybersecurity-tools" },
        { lang: "Ethical Hacking", duration: "3-4 Weeks", video: "https://youtu.be/3Kq1MIfTWCE", documentation: "https://www.eccouncil.org/what-is-ethical-hacking/" },
    ];

    const [problems, setProblems] = useState(() => {
        const saved = localStorage.getItem("CyberSecurityProgress");
        return saved ? JSON.parse(saved) : initialProblems.map(problem => ({ ...problem, completed: false }));
    });

    useEffect(() => {
        localStorage.setItem("CyberSecurityProgress", JSON.stringify(problems));
    }, [problems]);

    const handleCheckboxChange = (index) => {
        const updatedProblems = [...problems];
        updatedProblems[index].completed = !updatedProblems[index].completed;
        setProblems(updatedProblems);
    };

    return (
        <>
            <div className="main-container">
                <div className="web-title">Cybersecurity Roadmap</div>
                <div className="web-table-container">
                    <table className="web-table">
                        <thead className="table-head">
                            <tr>
                                <td>Status</td>
                                <td>Topic</td>
                                <td>Duration</td>
                                <td>Video Resource</td>
                                <td>Documentation Resource</td>
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

export default CyberSecurity;
