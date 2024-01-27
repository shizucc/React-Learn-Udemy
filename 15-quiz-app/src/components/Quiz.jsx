import { useState } from "react";
import QUESTION from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState([]);

  const questionIndex = userAnswers.length;
  return (
    <div id="quiz">
      <div id="question">
        <h2>Ini adalah pertanyaan</h2>
        <ul id="answers">
          <li className="answer">
            <button>Jawaban 1</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
