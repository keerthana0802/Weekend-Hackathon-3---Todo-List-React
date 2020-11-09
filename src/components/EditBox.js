import React from "react";

export default function EditBox({ editItem, handleEditChange, saveEditToDo }) {
  return (
    <>
      <input className="editTask" type="string" onChange={handleEditChange} value={editItem} />
      <button disabled={editItem === ""} className="saveTask" style={{ marginLeft: "5px" }} onClick={saveEditToDo}>
        Save
      </button>
    </>
  );
}
