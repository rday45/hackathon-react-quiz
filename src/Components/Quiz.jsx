import { useState, useEffect } from "react";

export default function Quiz() {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Add probably a good idea to try to add error catching functionality
  function fetchQuestionData() {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => {
        // ensures that undefined states are handled gracefully. Without this, i would get an error.
        if (data.results) {
          setQuestionsArray(data.results);
          setLoading(false);
        }
      });
  }

  function nextQuestion(event) {
    event.preventDefault();
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  useEffect(fetchQuestionData, []);

  if (loading) {
    return <h1>Loading! Please wait.</h1>;
  } else {
    return (
      <div className="quiz-container">
        <span className="quiz-text-container">
          <h2>Question 1/5</h2>
          <h3>{questionsArray[currentQuestionIndex].question}</h3>
          <ul className="answer-list">
            <li className="answer-option">
              {questionsArray[currentQuestionIndex].correct_answer}
            </li>
            <li className="answer-option">
              {questionsArray[currentQuestionIndex].incorrect_answers[0]}
            </li>
            <li className="answer-option">{questionsArray[currentQuestionIndex].incorrect_answers[1]}</li>
            <li className="answer-option">{questionsArray[currentQuestionIndex].incorrect_answers[2]}</li>
          </ul>
        </span>

        <button className="quiz-button" onClick={nextQuestion}>Next Question</button>
      </div>
    );
  }
}
