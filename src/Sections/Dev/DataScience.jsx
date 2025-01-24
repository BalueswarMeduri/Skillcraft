// Code for DataScience Component
import React, { useState, useEffect } from "react";
import "./TableStyling.css";

const DataScience = () => {
    const initialProblems = [
        { lang: "Python Basics", duration: "1-2 Weeks", video: "https://youtu.be/_uQrJ0TkZlc", documentation: "https://docs.python.org/3/tutorial/" },
        { lang: "NumPy for Data Science", duration: "1 Week", video: "https://youtu.be/8ext9G7xspg", documentation: "https://numpy.org/doc/" },
        { lang: "Data Manipulation with Pandas", duration: "2 Weeks", video: "https://youtu.be/vmEHCJofslg", documentation: "https://pandas.pydata.org/docs/" },
        { lang: "Data Cleaning and Preprocessing", duration: "1-2 Weeks", video: "https://youtu.be/ZOX18HfLHGQ", documentation: "https://www.dataquest.io/blog/data-cleaning/" },
        { lang: "Data Visualization with Matplotlib", duration: "1 Week", video: "https://youtu.be/3Xc3CA655Y4", documentation: "https://matplotlib.org/stable/contents.html" },
        { lang: "Seaborn for Advanced Visualization", duration: "1 Week", video: "https://youtu.be/6GUZXDef2U0", documentation: "https://seaborn.pydata.org/" },
        { lang: "Statistics for Data Science", duration: "2 Weeks", video: "https://youtu.be/5Dnw46eC-0o", documentation: "https://www.khanacademy.org/math/statistics-probability" },
        { lang: "Exploratory Data Analysis (EDA)", duration: "2 Weeks", video: "https://youtu.be/5C4L_114P_M", documentation: "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15" },
        { lang: "Introduction to Machine Learning", duration: "3 Weeks", video: "https://youtu.be/GwIo3gDZCVQ", documentation: "https://scikit-learn.org/stable/getting_started.html" },
        { lang: "Supervised Learning Techniques", duration: "3 Weeks", video: "https://youtu.be/AoeEHqVSNOw", documentation: "https://towardsdatascience.com/supervised-learning-7a4e5c0961f4" },
        { lang: "Unsupervised Learning Techniques", duration: "2 Weeks", video: "https://youtu.be/fNxaJsNG3-s", documentation: "https://towardsdatascience.com/unsupervised-learning-fc58db3f13e2" },
        { lang: "Model Evaluation and Validation", duration: "1 Week", video: "https://youtu.be/85dtiMz9tSo", documentation: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
        { lang: "Deep Learning Basics", duration: "3-4 Weeks", video: "https://youtu.be/aircAruvnKk", documentation: "https://www.deeplearning.ai/ai-notes/" },
    ];

    const [problems, setProblems] = useState(() => {
        const saved = localStorage.getItem("DataScienceProgress");
        return saved ? JSON.parse(saved) : initialProblems.map(problem => ({ ...problem, completed: false }));
    });

    useEffect(() => {
        localStorage.setItem("DataScienceProgress", JSON.stringify(problems));
    }, [problems]);

    const handleCheckboxChange = (index) => {
        const updatedProblems = [...problems];
        updatedProblems[index].completed = !updatedProblems[index].completed;
        setProblems(updatedProblems);
    };

    return (
        <div className="main-container">
            <div className="web-title">Data Science Roadmap</div>
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
                                <td>{problem.lang}</td>
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
    );
};

export default DataScience;
