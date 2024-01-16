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

  function handleProjectSave(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  function handleProjectDelete() {
    console.log(selectedProjectIndex);
    const updatedProjects = [...projects];
    updatedProjects.splice(selectedProjectIndex, 1);
    setProjects(updatedProjects);
    setPage("home");
    setSelectedProjectIndex(null);
  }

  function handleTaskSave(task) {
    setProjects((prevProjects) => {
      const projects = [...prevProjects];
      projects[selectedProjectIndex] = {
        ...projects[selectedProjectIndex],
        tasks: [...projects[selectedProjectIndex].tasks, task],
      };
      return projects;
    });
  }
  function handleTaskDelete(taskIndex) {
    const updatedProjects = [...projects];
    const tasks = updatedProjects[selectedProjectIndex].tasks;
    tasks.splice(taskIndex, 1);
    setProjects(updatedProjects);
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
        {page === "home" && (
          <Home onCreateProject={() => handlePageClick("addProject")} />
        )}
        {page === "addProject" && (
          <ProjectForm
            onSave={(project) => handleProjectSave(project)}
            onCancel={() => handlePageClick("home")}
          />
        )}
        {page === "project" && (
          <ProjectPage
            project={projects[selectedProjectIndex]}
            onTaskSave={(task) => handleTaskSave(task)}
            onTaskDelete={(taskIndex) => handleTaskDelete(taskIndex)}
            onProjectDelete={() => handleProjectDelete()}
          />
        )}
      </main>
    </div>
  );
}

export default App;
