import React from 'react';
import { useState } from 'react/cjs/react.development';
import NavBar from '../Components/Home/NavBar';
import Footer from '../Components/ProductoIdeal/Footer';
import { Home } from '../Constants/Images';
import { Questions } from '../Constants/Preguntas';
import '../css/Quiz.css';

const Quiz = () => {

    const [score, setScore] = useState(0);

    const answerQuestions = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            console.log(score);
        }
    }

    return (
        <div className="cQuiz">
            <NavBar></NavBar>
            <div className="Quiz">
                {Questions.map((question, index) => (
                    <div key={index} className="questions">
                        <div className="questionsText">
                            <p>{question.questionText1}</p>
                            <p>{question.questionText2}</p>
                            <p>{question.questionText3}</p>
                        </div>
                        <div className="answerOptions">
                            {question.answerOptions.map((ans, index) => (
                                <button key={index} onClick={() => answerQuestions(ans.isCorrect)}><img src={Home.bottonBeneficios} alt="" /> {ans.answerText}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer limite={Questions.length} visible={false} />
        </div>
    );
};

export default Quiz;