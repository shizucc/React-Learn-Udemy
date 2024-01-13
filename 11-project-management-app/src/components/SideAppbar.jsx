export default function SideAppbar() {
  return (
    <aside className="bg-gray-900 w-70 mt-10 rounded-tr-xl p-8">
      <h1 className="text-slate-50 text-2xl font-semibold">YOUR PROJECTS</h1>

      <button className="bg-gray-700 text-gray-400 hover:bg-gray-300 rounded-md px-3 py-1 mt-6">
        + Add Project
      </button>

      <section className="mt-8">
        <button className="text-slate-400 hover:bg-gray-500  w-full text-start py-1 px-2 rounded-sm active:bg-gray-500">
          Project 1
        </button>
      </section>
    </aside>
  );
}
