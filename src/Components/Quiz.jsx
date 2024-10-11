import { useState, useEffect } from "react";





export default function Quiz() {

  const [questionsArray, setQuestionsArray] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Add probably a good idea to try to add error catching functionality
  function fetchQuestionData(){
    fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
    .then((response)=>response.json())
    .then((data) => {
      // ensures that undefined states are handled gracefully. Without this, i would get an error.
      if (data.results) {
        setQuestionsArray(data.results);
        setLoading(false);
      }
    });
  }
  
  useEffect(fetchQuestionData,[])
  

  if (loading){
    return<h1>Loading! Please wait.</h1>
  } else {
    return (
      <div className="quiz-container">
        <span className="quiz-text-container">
          <h2>Question 1/5</h2>
          <h3>
            {questionsArray[currentQuestionIndex].question}
          </h3>
          <ul className="answer-list">
            <li className="answer-option">The sky is green.</li>
            <li className="answer-option">
              Humans can survive without oxygen and water.
            </li>
            <li className="answer-option">Blue whales live in the ocean.</li>
            <li className="answer-option">Human beings do not have a brain.</li>
          </ul>
        </span>
  
        <button className="quiz-button">Next Question</button>
      </div>
    );
  }
  
}
