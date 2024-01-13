export default function Input({ label }) {
  return (
    <p className="my-5">
      <label
        htmlFor="title"
        className="uppercase text-xl font-medium text-slate-600"
      >
        {label}
      </label>
      <p className="mt-1">
        <input
          className="bg-slate-200 rounded w-full h-8 focus:border-b-2 focus:border-slate-500 focus:outline-none"
          id="title"
          type="text"
        />
      </p>
    </p>
  );
}
