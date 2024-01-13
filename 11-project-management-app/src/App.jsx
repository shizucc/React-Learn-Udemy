import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import SideAppbar from "./components/SideAppBar";
import ProjectPage from "./components/ProjectPage";
import Home from "./components/Home";

let initialProjects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor de amet",
    dueDate: Date(),
    tasks: [
      "Learn the basics",
      "Mastering CSS",
      "Add React Hooks",
      "Learn the basics",
      "Mastering CSS",
      "Add React Hooks",
    ],
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor de amet",
    dueDate: Date(),
    tasks: ["Learn the basics", "Mastering CSS", "Add React Hooks"],
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor de amet",
    dueDate: Date(),
    tasks: ["Learn the basics", "Mastering CSS", "Add React Hooks"],
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  function handlePageClick(pageTitle) {
    setPage(pageTitle);
    setSelectedProjectIndex(null);
  }
  function handleProjectClick(index) {
    setSelectedProjectIndex(index);
    setPage("project");
  }

  return (
    <div className="flex flex-row gap-3 h-screen">
      <SideAppbar
        selectedPage={null}
        onSelectedPage={(title) => handlePageClick(title)}
        projects={projects}
        onProjectClick={(index) => handleProjectClick(index)}
        selectedProjectIndex={selectedProjectIndex}
      />
      <main className="h-screen  flex justify-center py-5">
        {page === "home" && <Home />}
        {page === "addProject" && <ProjectForm />}
        {page === "project" && (
          <ProjectPage project={projects[selectedProjectIndex]} />
        )}
      </main>
    </div>
  );
}

export default App;
