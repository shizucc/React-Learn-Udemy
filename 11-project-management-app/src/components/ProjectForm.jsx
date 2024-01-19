import { useRef } from "react";
import Input from "./Input";

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
    <section className="flex h-screen px-10 flex-col justify-center items-center">
      <menu className="flex flex-row gap-3 self-end">
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
      </menu>
      <form action="">
        <Input label={"title"} textarea={false} ref={title} />
        <Input label={"description"} textarea={true} ref={description} />
        <Input type="date" label={"Due Date"} ref={dueDate} />
      </form>
    </section>
  );
}
