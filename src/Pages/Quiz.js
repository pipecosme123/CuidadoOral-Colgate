import React from 'react';
import { useState } from 'react/cjs/react.development';
import NavBar from '../Components/Home/NavBar';
import Footer from '../Components/ProductoIdeal/Footer';
import { Home } from '../Constants/Images';
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
      {/* <div className="Quiz">
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
                      (<img src={Home.buttonRepuestaCorrecta} alt="" />)
                      : (<img src={Home.buttonRepuestaFalsa} alt="" />)
                    : (<img src={Home.bottonBeneficios} alt="" />)}
                  {ans.answerText}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div> */}
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
                          (<img src={Home.buttonRepuestaCorrecta} alt="" />)
                          : (<img src={Home.buttonRepuestaFalsa} alt="" />)
                        : (<img src={Home.bottonBeneficios} alt="" />)}
                      {ans.answerText}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      ) : (
        <div className="sAnswer">
          {score === 5 ? (
            <div className="scoreAnswer v1">
              <div className="valueScore">
                <h1>{`${score}/5`}</h1>
                <h1>Correctas</h1>
              </div>
              <h3 className="titleScore">¡Felicitaciones!</h3>
              <p className="mensaje">Eres un experto en cuidado oral <br /> <b>¡CONTAGIA TU SONRISA!</b></p>
            </div>
          ) : score <= 4 && score >= 3 ? (
            <div className="scoreAnswer v2">
              <div className="valueScore">
                <h1>{`${score}/5`}</h1>
                <h1>Correctas</h1>
              </div>
              <h3 className="titleScore">¡Muy bien!</h3>
              <p className="mensaje">Sigamos aprendiendo juntos</p>
            </div>
          ) : (
            <div className="scoreAnswer v3">
              <div className="valueScore">
                <h1>{`${score}/5`}</h1>
                <h1>Correctas</h1>
              </div>
              {/* <h3 className="titleScore">¡Felicitaciones!</h3> */}
              <p className="mensaje">Sigamos aprendiendo juntos, <br /> Visita nuestra sección de consejos</p>
            </div>
          )}
        </div>
      )}

      < Footer limite={Questions.length} visible={false} />
    </div>
  );
};

export default Quiz;