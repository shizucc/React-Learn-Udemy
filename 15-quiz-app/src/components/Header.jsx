import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="" />
      <h1>Welcome to Quiz Apps</h1>
    </header>
  );
}
