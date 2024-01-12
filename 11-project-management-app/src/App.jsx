import ProjectForm from "./components/ProjectForm";
import SideAppbar from "./components/SideAppBar";

function App() {
  return (
    <div className="flex flex-row gap-3 h-screen">
      <SideAppbar />
      <ProjectForm />
    </div>
  );
}

export default App;
