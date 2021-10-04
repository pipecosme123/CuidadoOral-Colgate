import React, { useState } from 'react';
import NavBar from '../Components/Home/NavBar';
import Footer from '../Components/ProductoIdeal/Footer';
import Results from '../Components/Quiz.js/Results';
import { ImgHome } from '../Constants/Images';
import { Questions } from '../Constants/Preguntas';
import '../css/Quiz.css';

const Quiz = () => {

  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(0);

  const [visibleAnswer, setVisibleAnswer] = useState(
    new Array(Questions.length).fill(false)
  );

  const answerQuestions = (isCorrect, index) => {

    if (visibleAnswer[index] === false) {
      setAnswer(answer + 1);
      // console.log( "preguntas contestadas ",  answer);

      if (isCorrect) {
        setScore(score + 1);
        // console.log(score);
      }

      handleOnChange(index);
      // console.log(visibleAnswer[index]);
    }

  }

  const handleOnChange = (position) => {
    const updatedCheckedState = visibleAnswer.map((item, index) =>
      index === position ? item ? true : true : item
    );
    setVisibleAnswer(updatedCheckedState);
  };


  return (
    <div className="cQuiz">
      <NavBar></NavBar>

      {answer < 5 ? (
        <div className="scoreAnswer">
          <div className="Quiz">
            {Questions.map((question, indexp) => (
              <div key={indexp} className="questions">
                <div className="questionsText">
                  <p>{question.questionText1}</p>
                  <p>{question.questionText2}</p>
                  <p>{question.questionText3}</p>
                </div>
                <div className={visibleAnswer[indexp] ? "answerOptions answer" : "answerOptions"}>
                  {question.answerOptions.map((ans, indexh) => (
                    <button className={`${ans.isCorrect}`} key={indexh} onClick={() => answerQuestions(ans.isCorrect, indexp)}>
                      {visibleAnswer[indexp] ?
                        ans.isCorrect ?
                          (<img src={ImgHome.buttonRepuestaCorrecta} alt="" />)
                          : (<img src={ImgHome.buttonRepuestaFalsa} alt="" />)
                        : (<img src={ImgHome.bottonBeneficios} alt="" />)}
                      {ans.answerText}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          < Footer limite={Questions.length} visible={false} />
        </div>
      ) : (
        <div className="sAnswer">
          {score === 5 ? (
            <div className="scoreAnswer v1">
              <Results
                scoreResults={score}
                titleResults="¡Felicitaciones!"
                mensaje="Eres un experto en cuidado oral"
                mensajeB="¡CONTAGIA TU SONRISA!"
              />
            </div>
          ) : score <= 4 && score >= 3 ? (
            <div className="scoreAnswer v2">
              <Results
                scoreResults={score}
                titleResults="¡Muy bien!"
                mensaje="Sigamos aprendiendo juntos"
                mensajeB=""
              />
            </div>
          ) : (
            <div className="scoreAnswer v3">
              <Results
                scoreResults={score}
                titleResults=""
                mensaje="Sigamos aprendiendo juntos, Visita nuestra sección de consejos"
                mensajeB=""
              />
            </div>
          )}
        </div>
      )}


    </div>
  );
};

export default Quiz;