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

  const [currentItem, setCurrentItem] = useState(0);
  const [item, setItem] = useState({});
  const [timer, setTimer] = useState(0);
  // const [finished, setFinished] = useState(false);

  function nextItem() {
    setCurrentItem(currentItem + 1);
    setItem(thisQuiz.questonsList[currentItem]);
  }

  function preItem() {
    setCurrentItem(currentItem - 1);
    setItem(thisQuiz.questonsList[currentItem]);
  }

  console.log(thisQuiz.questonsList.length);

  useEffect(() => {
    handleTimer();
    setItem(thisQuiz.questonsList[0]);
  }, []);

  const handleTimer = () => {
    let neededTimeArr = thisQuiz.questonsList.map((t) => {
      return t.neededTime;
    });
    let sumOfSec = neededTimeArr.reduce((tot, cur) => {
      return tot + cur;
    });
    setTimer(sumOfSec);
  };

  return (
    <div className="quiz_page">
      <h4>{thisQuiz.quizTitle}</h4>
      <span>{` ${thisQuiz.questonsList.length} Questions`}</span>
      <Timer seconds={timer} />
      <div className="question_wrap">
        <Question currentItem={item} />;
      </div>
      <button onClick={preItem} disabled={currentItem == 0}>
        Back
      </button>
      <button
        onClick={nextItem}
        disabled={currentItem == thisQuiz.questonsList.length}
      >
        Next
      </button>
    </div>
  );
};

export default QuizPage;
