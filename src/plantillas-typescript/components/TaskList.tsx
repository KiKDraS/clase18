import React from "react";
import { TaskCard } from "./TaskCard";
//Importación de ícono
import { BiTaskX } from "react-icons/bi";
import { Task } from "../interfaces/Task";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => any;
}

export const TaskList = ({ tasks, deleteTask }: Props): JSX.Element => {
  if (tasks.length === 0)
    return (
      <div className="text-light text-center">
        <h1>There are no tasks yet</h1>
        <BiTaskX size="20rem" />
      </div>
    );

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="col-md-4 mt-2">
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};
