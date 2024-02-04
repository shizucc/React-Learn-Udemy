import { createContext } from "react";
import Question from "../Question"

export const QuestionContext = createContext({
    duration : null,
    userAnswers : []

  });

export default function QuestionContextProvider({children}){
    const ctxValue = {
        duration : 5000
    }

    return <QuestionContext.Provider value={ctxValue}>{children}</QuestionContext.Provider>
}