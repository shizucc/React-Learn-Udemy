import Input from "./Input";

export default function ProjectForm() {
  return (
    <section className="flex flex-col bg-slate-100">
      <div className="flex flex-row bg-slate-500 gap-3 self-end">
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <form action="">
        <Input label={"title"} />
        <label
          htmlFor="description"
          className="uppercase text-xl font-medium text-slate-600"
        >
          Description
        </label>
        <p>
          <textarea
            className="w-80 h-32 bg-slate-200 focus:border-b-2 rounded focus:border-slate-500 focus:outline-none"
            name=""
            id="description"
            rows="10"
          ></textarea>
        </p>
        <label
          className="uppercase text-xl font-medium text-slate-600"
          htmlFor="dueDate"
        >
          Due Date
        </label>
        <p>
          <input
            className="bg-slate-200 rounded w-80 h-8 focus:border-b-2 focus:border-slate-500 focus:outline-none"
            id="dueDate"
            type="date"
          />
        </p>
      </form>
    </section>
  );
}
