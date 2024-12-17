import React from "react";
import "./Task.css";

interface TaskProps {
  title: string;
  content: string;
}

const Task: React.FC<TaskProps> = ({ title, content }) => {
  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Task;
