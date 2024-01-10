// import { styled } from "styled-components";

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${({ $invalid }) => ($invalid ? "#f73f3f" : "#374151")};
//   border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
// `;

// const CustomInput = ({ label, invalid, ...props }) => (

// );
// export default CustomInput;

export default function Input({ invalid, label, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase ";

  let inputClass =
    "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow ";

  if (invalid) {
    labelClass += "text-red-600";
    inputClass += "bg-red-100";
  } else {
    labelClass += "text-stone-300";
    inputClass += "bg-stone-300";
  }
  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}
