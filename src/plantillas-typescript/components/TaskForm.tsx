import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

const inititalState = {
  title: "",
  description: "",
};

interface Props {
  addNewTask: (task: Task) => void;
}

//Crear tipo de dato personalizado
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState<Task>(inititalState);
  const titleInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addNewTask(task);
    setTask(inititalState);
    titleInput.current?.focus();
  };

  //Return any implicito
  /*
    e.target =>
    target = {name, value} =>
    {target: {name, value}}
  */
  const handleChange = ({ target: { name, value } }: HandleInputChange) =>
    setTask({ ...task, [name]: value });
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add a Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          autoFocus
          onChange={handleChange}
          ref={titleInput}
          value={task.title}
        />
        <textarea
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"
          onChange={handleChange}
          value={task.description}></textarea>
        <button type="submit" className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
