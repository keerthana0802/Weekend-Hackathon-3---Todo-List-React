import React from "react";
import "./../styles/App.css";
import ListView from "./ListView";

export default function App() {
  const [newItem, setNewItem] = React.useState("");
  const [editIndex, setEditIndex] = React.useState("-1");
  const [editItem, setEditItem] = React.useState("");
  const [list, setList] = React.useState([]);
  const addToDo = () => {
    let newToDo = newItem;
    if (newToDo === "") {
      return;
    }
    let presentTask = list.map(item => item.task);
    if (presentTask.includes(newToDo)) {
      setEditItem("");
      return;
    }
    let newToDoObj = {
      task: newToDo,
      edit: false
    }
    let newList = [...list, newToDoObj];
    setList(newList);
    setNewItem("");
  };
  const handleChange = (event) => {
    setNewItem(event.target.value);
  };
  const handleEditChange = (event) => {
    setEditItem(event.target.value);
  };
  const saveEditToDo = () => {
    let listToEdit = [...list];
    listToEdit[editIndex].task = editItem;
    listToEdit[editIndex].edit = false;
    setList(listToEdit);
    setEditIndex(-1);
    setEditItem("");
  };
  const handleDelete = (index) => {
    let listToUpdate = [...list];
    listToUpdate.splice(index, 1);
    setList(listToUpdate);
  };
  
  const handleEdit = (index) => {
    let editObj = list[index];
    editObj.edit = true;
    let newEditList = [...list];
    newEditList[index] = editObj;
    setEditIndex(index);
    setList(newEditList);
  };
  return (
    <div id="main">
      <input type="string" id="task" onChange={handleChange} value={newItem} />
      <button style={{ margin: "5px" }} id="btn" onClick={addToDo}>
        Add
      </button>
      <br />
      {list.map((item, index) => (
        <ListView
          task={item.task}
          edit={item.edit}
          key={index}
          serial={index}
          editItem={editItem}
          handleEditChange={handleEditChange}
          saveEditToDo={saveEditToDo}
          handleDelete={() => handleDelete(index)}
          handleEdit={() => handleEdit(index)}
        />
      ))}
    </div>
  );
}
