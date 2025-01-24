// Code for AIML component
import React, { useState, useEffect } from "react";
import "./TableStyling.css";

const AIML = () => {
    const initialProblems = [
        { lang: "Introduction to AI/ML", duration: "1 Week", video: "https://youtu.be/2ePf9rue1Ao", documentation: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence" },
        { lang: "Mathematics for AI (Linear Algebra, Calculus, Probability)", duration: "3 Weeks", video: "https://youtu.be/FDFkJMv1U7A", documentation: "https://mml-book.github.io/" },
        { lang: "Python for AI/ML", duration: "2 Weeks", video: "https://youtu.be/WGJJIrtnfpk", documentation: "https://docs.python.org/3/tutorial/" },
        { lang: "Data Preprocessing", duration: "2 Weeks", video: "https://youtu.be/rNjpi8B7Hbk", documentation: "https://scikit-learn.org/stable/modules/preprocessing.html" },
        { lang: "Supervised Learning (Regression, Classification)", duration: "3 Weeks", video: "https://youtu.be/xlLVryf8hwk", documentation: "https://scikit-learn.org/stable/supervised_learning.html" },
        { lang: "Unsupervised Learning (Clustering, Dimensionality Reduction)", duration: "3 Weeks", video: "https://youtu.be/l4vqV9hAYvY", documentation: "https://scikit-learn.org/stable/unsupervised_learning.html" },
        { lang: "Neural Networks Basics", duration: "3 Weeks", video: "https://youtu.be/aircAruvnKk", documentation: "https://cs231n.github.io/neural-networks-1/" },
        { lang: "Deep Learning with TensorFlow/PyTorch", duration: "4-5 Weeks", video: "https://youtu.be/tPYj3fFJGjk", documentation: "https://www.tensorflow.org/" },
        { lang: "Natural Language Processing Basics", duration: "3 Weeks", video: "https://youtu.be/8uovAYhD3_E", documentation: "https://www.nltk.org/" },
        { lang: "Computer Vision Basics", duration: "3 Weeks", video: "https://youtu.be/mzsczrw3O1g", documentation: "https://opencv.org/" },
        { lang: "Model Deployment", duration: "2 Weeks", video: "https://youtu.be/P5C1aQehkZE", documentation: "https://mlflow.org/" },
    ];

    const [problems, setProblems] = useState(() => {
        const saved = localStorage.getItem("AIMLProgress");
        return saved ? JSON.parse(saved) : initialProblems.map(problem => ({ ...problem, completed: false }));
    });

    useEffect(() => {
        localStorage.setItem("AIMLProgress", JSON.stringify(problems));
    }, [problems]);

    const handleCheckboxChange = (index) => {
        const updatedProblems = [...problems];
        updatedProblems[index].completed = !updatedProblems[index].completed;
        setProblems(updatedProblems);
    };

    return (
        <>
            <div className="main-container">
                <div className="web-title">Artificial Intelligence & Machine Learning</div>
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

export default AIML;
