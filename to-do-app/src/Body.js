import React, { useState, Fragment } from "react";
import "./index.css";
import data from "./mock-data.json";
import { ReadOnlyRow } from "./Components/ReadOnlyRow";
import { EditableRow } from "./Components/EditableRow";
const App = () => {
  // States
  const [todo, setTodo] = useState(data);

  const [addFormData, setAddFormData] = useState({
    ID: "",
    title: "",
    description: "",
  });

  const [editTodoId, seteditTodoId] = useState(null);

  const [updateFormData, setUpdateFormData] = useState({
    ID: "",
    title: "",
    description: "",
  });
  //   Event Handlers
  const handlFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      ID: addFormData.ID,
      title: addFormData.title,
      description: addFormData.description,
    };

    const newTodos = [...todo, newTodo];
    setTodo(newTodos);
  };

  const updateFormSubmit = (event) => {
    event.preventDefault();

    const editedTodo = {
      ID: updateFormData.ID,
      title: updateFormData.title,
      description: updateFormData.description,
    };

    const updatedTodo = [...todo];
    const index = todo.findIndex((todo1) => todo1.ID === editTodoId.ID);

    updatedTodo[index] = editedTodo;
    setTodo(updatedTodo);
    seteditTodoId(null);
  };
  const handleUpdateClick = (event, todo1) => {
    event.preventDefault();
    seteditTodoId(todo1.ID);

    const formValues = {
      id: updateFormData.ID,
      title: updateFormData.title,
      description: updateFormData.description,
    };

    setUpdateFormData(formValues);
  };

  const updateFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...updateFormData };
    newFormData[fieldName] = fieldName;
    setUpdateFormData(newFormData);
  };

  const handleCancelClick = () => {
    seteditTodoId(null);
  };

  const handleDeleteClick=(todoId)=>{
	  const newTodo=[...todo];
	  const index =todo.findIndex((todo1)=>todo1.id===todoId);
	  newTodo.splice(index,1);
	  setTodo(newTodo)
  }
  return (
    <div className="app-container">
      {/* Form */}
      <div className="form-container" onSubmit={updateFormSubmit}>
        <form className="form" onSubmit={handleFormSubmit}>
          <label> ID: </label>
          <input
            type="number"
            name="ID"
            className="id-input"
            placeholder="ID"
            required
            onChange={handlFormChange}
          ></input>
          <label> Title: </label>
          <input
            name="title"
            type="text"
            className="title-input"
            placeholder="Title"
            required
            onChange={handlFormChange}
          ></input>
          <label> Description: </label>
          <textarea
            name="description"
            type="text"
            className="des-input"
            placeholder="Description"
            onChange={handlFormChange}
          ></textarea>

          <div>
            <button type="submit" className="btn-create">
              Create
            </button>
            <button type="submit" className="btn-save">
              Save
            </button>
          </div>
        </form>
      </div>

      <div>
        {/* Table */}
        <form>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((todo1) => (
                <Fragment>
                  {editTodoId === todo1.ID ? (
                    <EditableRow
                      updateFormData={updateFormData}
                      handleUpdateClick={handleUpdateClick}
					  updateFormSubmit={updateFormSubmit}
                    />
                  ) : (
                    <ReadOnlyRow
                      todo1={todo1}
                      handleUpdateClick={handleUpdateClick}
					  handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default App;
