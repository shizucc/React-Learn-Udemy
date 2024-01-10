// import { styled } from "styled-components";

// const StyledButton = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

// const Button = ({ ...props }) => <StyledButton {...props} />;

// export default Button;

export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-amber-500 px-4 py-2 rounded uppercase text-lg font-semibold hover:bg-amber-600 text-stone-900"
      {...props}
    >
      {children}
    </button>
  );
}
