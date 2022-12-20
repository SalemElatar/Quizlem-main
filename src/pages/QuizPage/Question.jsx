import { useState } from "react";
import "./quiz.css";

export default function Question({
  question,
  addToCounter,
  removeFromCounter,
}) {
  const [qRes, setqRes] = useState(false);

  const handleSelect = (e) => {
    if (e.target.dataset.answer === question.rightAnswer) {
      if (qRes === false) {
        setqRes(true);
        addToCounter(e);
      }
    } else {
      if (qRes === true) {
        setqRes(false);
        removeFromCounter();
      } else {
        e.target.classList.add("wrong_ans");
      }
    }
    console.log(e);
  };

  return (
    <div className="question">
      <h4>{question.quesTitle}</h4>
      <form className="answers">
        <div className="">
          <input
            type="radio"
            className="answerA "
            id={`${question.id}answerA`}
            name={question.id}
            onChange={handleSelect}
            data-answer={question.answerA}
          />
          <label htmlFor={`${question.id}answerA`}>{question.answerA}</label>
        </div>

        <div className="">
          <input
            type="radio"
            className="answerB "
            id={`${question.id}answerB`}
            name={question.id}
            onChange={handleSelect}
            data-answer={question.answerB}
          />
          <label htmlFor={`${question.id}answerB`}>{question.answerB}</label>
        </div>

        <div className="">
          <input
            type="radio"
            className="answerC "
            id={`${question.id}answerC`}
            name={question.id}
            onChange={handleSelect}
            data-answer={question.answerC}
          />
          <label htmlFor={`${question.id}answerC`}>{question.answerC}</label>
        </div>
      </form>
    </div>
  );
}
