export default function SideAppbar({
  onSelectedPage,
  projects,
  selectedProjectIndex,
  onProjectClick,
}) {
  function handlePageClick(pageTitle) {
    onSelectedPage(pageTitle);
  }
  return (
    <aside className="bg-gray-900 w-70 mt-10 rounded-tr-xl p-8">
      <p>
        <button onClick={() => handlePageClick("home")}>
          <h1 className="text-slate-50 text-2xl font-semibold">
            YOUR PROJECTS
          </h1>
        </button>
      </p>
      <p>
        <button
          onClick={() => onSelectedPage("addProject")}
          className="bg-gray-700 text-gray-400 hover:bg-gray-300 rounded-md px-3 py-1 mt-6"
        >
          + Add Project
        </button>
      </p>

      <section className=" flex flex-col gap-2 mt-8 ">
        {projects.map((project, index) => {
          const active = index === selectedProjectIndex;

          return (
            <button
              key={index}
              onClick={() => onProjectClick(index)}
              className={`text-slate-400 ${
                active ? "bg-gray-500" : undefined
              } hover:bg-gray-500  w-full text-start py-1 px-2 rounded-sm`}
            >
              {project.title}
            </button>
          );
        })}
      </section>
    </aside>
  );
}
