import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  let content;
  if (textarea) {
    content = (
      <textarea
        ref={ref}
        className="w-full h-32 mt-1 mb-2 p-2 bg-slate-200 focus:border-b-2 rounded focus:border-slate-500 focus:outline-none"
      ></textarea>
    );
  } else {
    content = (
      <input
        ref={ref}
        className="bg-slate-200 rounded w-full mt-1 mb-2 h-8 p-2 focus:border-b-2 focus:border-slate-500 focus:outline-none"
        {...props}
      />
    );
  }

  return (
    <>
      <label className="uppercase text-xl font-medium text-slate-600">
        {label}
      </label>
      {content}
    </>
  );
});

export default Input;
