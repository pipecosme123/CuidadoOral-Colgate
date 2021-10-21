import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Home/NavBar';
import Footer from '../Components/ProductoIdeal/Footer';
import Results from '../Components/Quiz.js/Results';
import Aplausos from '../img/Lottie/aplausos.json';
import Confetti from '../img/Lottie/confetti.json';
import { ImgHome } from '../Constants/Images';
import { Questions } from '../Constants/Preguntas';
import '../css/Quiz.css';

const Quiz = () => {

  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(0);

  const [visibleAnswer, setVisibleAnswer] = useState(
    new Array(Questions.length).fill(false)
  );

  const scrollView = () => {
    window.scroll({
      top: window.screen.width,
      left: 0
    });

    const noScroll = () => {
      window.scrollTo(window.scrollX, window.screen.width);
      // console.log(window.location.hash);
    }

    setTimeout(() => {
      window.addEventListener('scroll', noScroll);
    }, 500)
  }

  useEffect(() => {
    scrollView();

  }, [])

  const answerQuestions = (isCorrect, index) => {

    if (visibleAnswer[index] === false) {
      setAnswer(answer + 1);

      if (isCorrect) {
        setScore(score + 1);
      }

      handleOnChange(index);
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
          {scrollView()}
          {score === 5 ? (
            <div className="scoreAnswer v1">
              <Results
                scoreResults={score}
                titleResults="¡Felicitaciones!"
                mensaje="Eres un experto en cuidado oral"
                mensajeB="¡CONTAGIA TU SONRISA!"
                lottieJson={Confetti}
              />
            </div>
          ) : score <= 4 && score >= 3 ? (
            <div className="scoreAnswer v2">
              <Results
                scoreResults={score}
                titleResults="¡Muy bien!"
                mensaje="Sigamos aprendiendo juntos"
                mensajeB=""
                lottieJson={Aplausos}
              />
            </div>
          ) : (
            <div className="scoreAnswer v3">
              <Results
                scoreResults={score}
                titleResults=""
                mensaje="Sigamos aprendiendo juntos, Visita nuestra sección de consejos"
                mensajeB=""
                lottieJson={undefined}
              />
            </div>
          )}
        </div>
      )}


    </div>
  );
};

export default Quiz;