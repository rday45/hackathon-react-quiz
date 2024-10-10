export default function Quiz() {
  return (
    <div className="quiz-container">
      <span className="quiz-text-container">
        <h2>Question 1/5</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
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
