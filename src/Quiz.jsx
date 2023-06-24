import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const questions = [
    {
      questionText: "What is the capital of Kyrgyzstan",
      answerOptions: [
        { answerText: "Almaty", isCorrect: false },
        { answerText: "Bishkek", isCorrect: false },
        { answerText: "Osh", isCorrect: false },
        { answerText: "Karaganda", isCorrect: false },
        { answerText: "Shymkent", isCorrect: false },
      ],
    },
    {
      questionText: "Who the best gay of C-class?",
      answerOptions: [
        { answerText: "Jeff Sutkin", isCorrect: false },
        { answerText: "Aaaah Kachkeev", isCorrect: false },
        { answerText: "Miiider Murka", isCorrect: true },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Konchita", isCorrect: false },
      ],
    },
    {
      questionText: "Why Aadik always think about Dick-man (Tala)?",
      answerOptions: [
        { answerText: "Coz he wants to much", isCorrect: false },
        { answerText: "Coz he is thinking Miider", isCorrect: false },
        { answerText: "Coz he likes to eat", isCorrect: false },
        { answerText: "Coz he likes to run", isCorrect: false },
        { answerText: "Coz he is hungry", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCore, setShowCore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowCore(true);
    }
    setCurrentQuestion(nextQuestion);
  };

  return (
    <div className="quiz_container">
      {showCore ? (
        <div className="result_section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-block">
            <div className="question_section">
              <div className="question_count">
                <span>Question {currentQuestion + 1}</span> /{questions.length}
              </div>
              <div className="question_text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer_section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() => handleAnswerClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
