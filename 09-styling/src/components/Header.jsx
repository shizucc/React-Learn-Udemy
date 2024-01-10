import styled from "styled-components";
import logo from "../assets/logo.png";
import classes from "./header.module.css";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;
export default function Header() {
  return (
    <header className="flex flex-col items-center mt-16 mb-8 md:mb-4">
      <img
        src={logo}
        alt="A canvas"
        className="w-44 h-44 mb-8 object-contain"
      />
      <h1 className="text-xl md:text-4xl uppercase font-semibold tracking-widest text-amber-800 font-title ">
        ReactArt
      </h1>
      <p className={classes.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
