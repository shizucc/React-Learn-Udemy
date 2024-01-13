export default function ProjectPage({ project }) {
  return (
    <div className="flex px-10 flex-col justify-center">
      <section className="flex flex-row">
        <h2 className="text-2xl font-semibold text-gray-600 grow">
          {project.title}
        </h2>
        <button className="text-grey-600 font-medium rounded-md hover:bg-gray-400 px-2 ">
          Delete
        </button>
      </section>
      <p className="text-md mt-2 font-normal text-gray-400">
        {project.dueDate}
      </p>
      <p className="mt-4 mb-1 text-gray-600">{project.description}</p>
      <hr />
      <h2 className="text-2xl font-semibold text-gray-600 mt-3">Tasks</h2>
      <section className="flex flex-row items-center gap-2 mt-3">
        <input type="text" className="rounded-sm bg-slate-200 h-7" />
        <button className="text-grey-600 font-medium rounded-md hover:bg-gray-400 px-2">
          Add Task
        </button>
      </section>
      <div className="flex flex-col mt-5 gap-2 overflow-auto">
        {project.tasks.map((task, index) => {
          return (
            <section className="flex flex-row bg-gray-200 p-3 rounded-md mx-1">
              <p className="grow">{task}</p>
              <button>Clear</button>
            </section>
          );
        })}
      </div>
    </div>
  );
}
