import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export const TaskCard = ({
  task: { title, id, description },
  deleteTask,
}: Props) => (
  <div className="card card-body bg-secondary rounded-0">
    <h3>{title}</h3>
    <p>{id}</p>
    <p>{description}</p>
    <button
      className="btn btn-danger btn-block"
      onClick={() => id && deleteTask(id)}>
      Delete
    </button>
  </div>
);
