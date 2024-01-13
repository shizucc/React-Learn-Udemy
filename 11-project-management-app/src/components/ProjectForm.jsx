import Button from "./Buttons/Button";
import Input from "./Input";

export default function ProjectForm() {
  return (
    <section className="flex w-[36rem] px-10 flex-col justify-center">
      <div className="flex flex-row gap-3 self-end">
        <button className=" hover:bg-gray-300 text-gray-700 rounded-md px-3 py-1">
          Cancel
        </button>
        <button className="bg-gray-700 hover:bg-gray-300 text-gray-100 hover:text-gray-700 rounded-md px-3 py-1">
          Save
        </button>
      </div>
      <form action="">
        <p className="my-3">
          <label
            htmlFor="title"
            className="uppercase text-xl font-medium text-slate-600"
          >
            title
          </label>
          <p className="mt-1">
            <input
              className="bg-slate-200 rounded w-full h-8 focus:border-b-2 focus:border-slate-500 focus:outline-none"
              id="title"
              type="text"
            />
          </p>
        </p>
        <p className="my-3">
          <label
            htmlFor="description"
            className="uppercase text-xl font-medium text-slate-600"
          >
            Description
          </label>
          <textarea
            className="w-full h-32 mt-1 bg-slate-200 focus:border-b-2 rounded focus:border-slate-500 focus:outline-none"
            name=""
            id="description"
            rows="10"
          ></textarea>
        </p>
        <p className="my-3">
          <label
            className="uppercase text-xl font-medium text-slate-600"
            htmlFor="dueDate"
          >
            Due Date
          </label>
          <input
            className="bg-slate-200 mt-1 rounded w-full h-8 focus:border-b-2 focus:border-slate-500 focus:outline-none"
            id="dueDate"
            type="date"
          />
        </p>
      </form>
    </section>
  );
}
