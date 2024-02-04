import { useCallback, useEffect, useRef, useState } from "react";
import QUESTION from "../questions";
import RemainingBar from "./QuestionTimer";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isQuestionComplete = QUESTION.length === activeQuestionIndex;

  const handleUserAnswer = useCallback(
    function handleUserAnswer(answer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);

      setTimeout(() => {
        if (answer === QUESTION[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleUserAnswer(null),
    [handleUserAnswer]
  );

  if (isQuestionComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="quiz-complete" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTION[activeQuestionIndex].text}
        answers={QUESTION[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelectAnswer={handleUserAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
