import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 102000,
    annualInvestment: 12000,
    expectedReturn: 5.5,
    duration: 30,
  });

  function handleChanges(newValue, identifier) {
    setUserInput((prev) => {
      const newUserInput = { ...prev, [identifier]: +newValue };
      return newUserInput;
    });
  }

  const isUserInputValid = userInput.duration >= 1;

  const errorMessage = (
    <p className="center">Please Enter Duration greater than 0.</p>
  );

  return (
    <>
      <UserInput initialUserInput={userInput} onChange={handleChanges} />
      {isUserInputValid && <Result input={userInput} />}
      {!isUserInputValid && errorMessage}
    </>
  );
}

export default App;
