import React, { useState } from "react";
import "./TaskCreate.css";

interface TaskCreateProps {
  onCreateTask: (title: string, content: string) => void;
}

const TaskCreate: React.FC<TaskCreateProps> = ({ onCreateTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onCreateTask(title, content);
      setTitle("");
      setContent("");
      setIsEditing(false);
    }
  };

  return (
    <div className="task-create">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Titre"
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
          <textarea
            value={content}
            placeholder="Créer une note..."
            onChange={(e) => setContent(e.target.value)}
            className="content-textarea"
          />
          <div className="button-group">
            <button type="submit">Save Task</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <input
          type="text"
          placeholder="Créer une note..."
          onClick={() => setIsEditing(true)}
          className="create-input"
          readOnly
        />
      )}
    </div>
  );
};

export default TaskCreate;
