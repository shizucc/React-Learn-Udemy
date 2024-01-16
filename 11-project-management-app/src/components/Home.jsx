import "../assets/no-projects.png";
export default function Home({ onCreateProject }) {
  function handleCreateProject() {
    onCreateProject();
  }
  return (
    <div className="flex  px-10 flex-col justify-center items-center">
      <img src="src/assets/no-projects.png" alt="heh" className="w-20" />
      <h2 className="mt-4 font-bold text-gray-600">No Project Selected</h2>
      <p className="mt-3 text-sm text-gray-400">
        Select a project or create new project!
      </p>
      <p className="mt-3">
        <button
          onClick={handleCreateProject}
          className="text-gray-600  font-medium rounded-md bg-gray-200 hover:bg-gray-400 px-2 py-1 "
        >
          Create New Project
        </button>
      </p>
    </div>
  );
}
