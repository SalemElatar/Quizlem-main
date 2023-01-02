import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allQuizes from "../../quizesDB.json";
import Question from "./Question";
import Timer from "./Timer";

const QuizPage = () => {
  let { quizpage } = useParams();
  const thisQuiz = allQuizes.find((quizItem) => {
    return quizItem.id === quizpage;
  });

  const [countRight, setCountRight] = useState(0);
  const [yourResult, setYourResult] = useState("");

  const addToCounter = (e) => {
    setCountRight(countRight + 1);
    console.log(e);
    e.target.nextSibling.classList.add("correct_ans");
  };
  const removeFromCounter = () => {
    setCountRight(countRight - 1);
  };
  const handleSubmit = () => {
    console.log(
      document.querySelectorAll('input[type="radio"]').filter((rad) => {
        return rad.checked;
      })
    );
    // console.log(countRight);
    // if (countRight > thisQuiz.questonsList.length / 2) {
    //   setYourResult("you did it");
    // } else {
    //   setYourResult("");
    // }
  };

  const [timer, setTimer] = useState(0);

  const handleTimer = () => {
    let neededTimeArr = thisQuiz.questonsList.map((t) => {
      return t.neededTime;
    });
    let sumOfSec = neededTimeArr.reduce((tot, cur) => {
      return tot + cur;
    });

    if (sumOfSec > 60) {
    }

    // setTimer(sumOfSec > 60 ? sumOfSec / 60 : sumOfSec);
    setTimer(sumOfSec);
  };

  useEffect(() => {
    handleTimer();
  }, []);

  return (
    <div className="quiz_page">
      <h4>{thisQuiz.quizTitle}</h4>
      <span>{` ${thisQuiz.questonsList.length} Questions`}</span>

      <Timer seconds={timer} />

      <ul className="quetions_list">
        {thisQuiz.questonsList.map((question, index) => {
          return (
            <Question
              key={index}
              question={question}
              addToCounter={addToCounter}
              removeFromCounter={removeFromCounter}
            />
          );
        })}
      </ul>
      <button onClick={handleSubmit}>Submit Answers</button>

      <span>{yourResult}</span>
    </div>
  );
};

export default QuizPage;
