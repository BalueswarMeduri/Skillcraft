import React, { useState } from "react";
import "./Cabinnum.css";

const Cabintable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const problems = [
        { lang: "1", duration: "Prof. Siva Sankar Y", video: "sivasankar.y@srmap.edu.in ", documentation: "New Academic Building, second floor, cabin number 3" },
        { lang: "2", duration: "Prof. Jiji C V", video: "jiji.c@srmap.edu.in", documentation: "New Academic Building, 708" },
        { lang: "3", duration: "Dr Ramesh Vaddi", video: "ramesh.v@srmap.edu.in", documentation: "New Academic Building, 416" },
        { lang: "4", duration: "Dr M Ramkrishnan", video: "ramakrishnan.m@srmap.edu.in", documentation: "SC 06, Level 7, New Academic Building" },
        { lang: "5", duration: "Dr M Durga Prakash", video: "durgaprakash.m@srmap.edu.in", documentation: "SC 06, Level 7, New Academic Building" },
        { lang: "6", duration: "Dr K A Sunitha", video: "sunitha.ka@srmap.edu.in", documentation: "SC 06, Level 7, New Academic Building" },
        { lang: "7", duration: "Dr E Karthikeyan", video: "karthikeyan.e@srmap.edu.in", documentation: "Xlab-302" },
        { lang: "8", duration: "Dr Pradyut Sanki", video: "pradyut.s@srmap.edu.in", documentation: "XLab, X307" },
        { lang: "9", duration: "Dr Sreenivasulu T", video: "sreenivasulu.t@srmap.edu.in", documentation: "New Academic Building,level 4, 413" },
        { lang: "10", duration: "Dr Sudhakar Tummala", video: "sudhakar.t@srmap.edu.in", documentation: "16A,Level 2,Admin Block" },
        { lang: "11", duration: "Dr Sateeshkrishna Dhuli", video: "sateeshkrishna.d@srmap.edu.in", documentation: "New Academic Building, 408" },
        { lang: "12", duration: "Dr  V Uday Sankar", video: "udayasankar.v@srmap.edu.in", documentation: "New academic block 406" },
        { lang: "13", duration: "Dr Goutam Rana", video: "goutam.r@srmap.edu.in", documentation: "Cabin 20, 6th floor, New academic block" },
        { lang: "14", duration: "Dr Sateeshkrishna Dhuli", video: "sateeshkrishna.d@srmap.edu.in", documentation: "New Academic Building, 408" },
        { lang: "15", duration: "Dr Sateeshkrishna Dhuli", video: "sateeshkrishna.d@srmap.edu.in", documentation: "New Academic Building, 408" },
    ];

    const filteredProblems = problems.filter(problem =>
        Object.values(problem)
            .some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            <div className="main-container">
                <div className="web-title">Cabins</div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="web-table-container">
                    <table className="web-table">
                        <thead className="table-head">
                            <tr>
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Emails</td>
                                <td>Cabins</td>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProblems.map((problem, index) => (
                                <tr key={index}>
                                    <td className="lang-column">{problem.lang}</td>
                                    <td>{problem.duration}</td>
                                    <td>
                                        <a href={`mailto:${problem.video}`} target="_blank" rel="noopener noreferrer" className="text-cyan-300">
                                            {problem.video}
                                        </a>
                                    </td>
                                    <td>
                                        {problem.documentation}
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

export default Cabintable;
