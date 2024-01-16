import { useRef } from "react";

export default function ProjectForm({ onSave, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: [],
    };
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
    onSave(project);
  }

  function handleCancel() {
    onCancel();
  }
  return (
    <section className="flex w-full px-10 flex-col justify-center items-center">
      <div className="flex flex-row gap-3 self-end">
        <button
          onClick={() => handleCancel()}
          className=" hover:bg-gray-300 text-gray-700 rounded-md px-3 py-1"
        >
          Cancel
        </button>
        <button
          onClick={() => handleSave()}
          className="bg-gray-700 hover:bg-gray-300 text-gray-100 hover:text-gray-700 rounded-md px-3 py-1"
        >
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

          <input
            className=" bg-slate-200 rounded w-full h-8 p-2 focus:border-b-2 focus:border-slate-500 focus:outline-none"
            ref={title}
            id="title"
            type="text"
          />
        </p>
        <p className="my-3">
          <label
            htmlFor="description"
            className="uppercase text-xl font-medium text-slate-600"
          >
            Description
          </label>
          <textarea
            ref={description}
            className="w-full h-32 mt-1 p-2 bg-slate-200 focus:border-b-2 rounded focus:border-slate-500 focus:outline-none"
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
            ref={dueDate}
            className="bg-slate-200 mt-1 rounded w-full h-8 p-2 focus:border-b-2 focus:border-slate-500 focus:outline-none"
            id="dueDate"
            type="date"
          />
        </p>
      </form>
    </section>
  );
}
