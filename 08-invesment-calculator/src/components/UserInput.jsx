import Input from "./input/Input";
import InputContainer from "./input/InputContainer";
import InputSubContainer from "./input/InputSubContainer";

export default function UserInput({ initialUserInput, onChange }) {
  return (
    <InputContainer>
      <InputSubContainer>
        <Input
          label={"Initial Invesment"}
          onChange={(newValue) => onChange(newValue, "initialInvestment")}
          initialValue={initialUserInput.initialInvestment}
        />
        <Input
          label={"Annual Investment"}
          onChange={(newValue) => onChange(newValue, "annualInvestment")}
          initialValue={initialUserInput.annualInvestment}
        />
      </InputSubContainer>
      <InputSubContainer>
        <Input
          label={"Expeted Return"}
          onChange={(newValue) => onChange(newValue, "expetedReturn")}
          initialValue={initialUserInput.expectedReturn}
        />
        <Input
          label={"Duration"}
          onChange={(newValue) => onChange(newValue, "duration")}
          initialValue={initialUserInput.duration}
        />
      </InputSubContainer>
    </InputContainer>
  );
}
