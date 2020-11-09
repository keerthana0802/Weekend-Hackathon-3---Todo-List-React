import React from "react";
import EditBox from "./EditBox";

export default function ListView({
  task,
  edit,
  serial,
  handleDelete,
  handleEdit,
  handleEditChange,
  saveEditToDo,
  editItem
}) {
  return (
    <>
      <li className="list">
        {!edit ? (
          task
        ) : (
          <EditBox
            editItem={editItem}
            handleEditChange={handleEditChange}
            saveEditToDo={saveEditToDo}
          />
        )}
      </li>
      <button className="edit" style={{ margin: "5px" }} onClick={handleEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
