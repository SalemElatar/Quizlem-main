import { useState } from "react";
import "./quiz.css";

export default function Question({ currentItem }) {
  return (
    <>
      <h4>{currentItem.quesTitle}</h4>
      <form className="answers">
        <div className="">
          <input
            type="radio"
            className="answerA "
            id={`${currentItem.id}answerA`}
            name={currentItem.id}
            data-answer={currentItem.answerA}
          />
          <label htmlFor={`${currentItem.id}answerA`}>
            {currentItem.answerA}
          </label>
        </div>

        <div className="">
          <input
            type="radio"
            className="answerB "
            id={`${currentItem.id}answerB`}
            name={currentItem.id}
            data-answer={currentItem.answerB}
          />
          <label htmlFor={`${currentItem.id}answerB`}>
            {currentItem.answerB}
          </label>
        </div>

        <div className="">
          <input
            type="radio"
            className="answerC "
            id={`${currentItem.id}answerC`}
            name={currentItem.id}
            data-answer={currentItem.answerC}
          />
          <label htmlFor={`${currentItem.id}answerC`}>
            {currentItem.answerC}
          </label>
        </div>
      </form>
    </>
  );
}
