import React, { useState, Fragment } from "react";
import "./index.css";
import data from "./mock-data.json";
import { ReadOnlyRow } from "./Components/ReadOnlyRow";
import { EditableRow } from "./Components/EditableRow";
import { nanoid } from "nanoid";
const App = () => {

	// States
	const [todos, setTodos] = useState(data);

	const [addFormData, setAddFormData] = useState({
		ID: "",
		title: "",
		description: "",
	});
	const [updateFormData, setUpdateFormData] = useState({
		ID: "",
		title: "",
		description: "",
	});
	const [editTodoId, setEditTodoId] = useState(null);

	//   Event Handlers
	const handleAddFormChange = event => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const handleUpdateFormChange = event => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...updateFormData };
		newFormData[fieldName] = fieldValue;

		setUpdateFormData(newFormData);
	};

	const handleAddFormSubmit = event => {
		event.preventDefault();

		const newTodo = {
			id: nanoid(),
			ID: addFormData.ID,
			title: addFormData.title,
			description: addFormData.description,
		};

		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
	};

	const handleUpdateFormSubmit = event => {
		event.preventDefault();

		const editedContact = {
			id: editTodoId,
			ID: updateFormData.ID,
			title: updateFormData.title,
			description: updateFormData.description,
		};

		const newContacts = [...todos];

		const index = todos.findIndex(contact => contact.id === editTodoId);

		newContacts[index] = editedContact;

		setTodos(newContacts);
		setEditTodoId(null);
	};

	const handleUpdateClick = (event, contact) => {
		event.preventDefault();
		setEditTodoId(contact.id);

		const formValues = {
			ID: contact.ID,
			title: contact.title,
			description: contact.description,
		};

		setUpdateFormData(formValues);
	};

	const handleCancelClick = () => {
		setEditTodoId(null);
	};

	const handleDeleteClick = contactId => {
		const newContacts = [...todos];

		const index = todos.findIndex(contact => contact.id === contactId);
		newContacts.splice(index, 1);
		alert("Are you sure, you want to delete?");
		setTodos(newContacts);
	};
	const sorting =()=>{
		console.log('sort');
		let s = [...todos];
		s.sort((a,b)=> a.ID-b.ID)
		setTodos(s);
		
	}
	return (
		<div className="app-container">
			{/* Form */}
			<div className="form-container">
				<form
					className="form-container"
					//  className="form"
					onSubmit={handleAddFormSubmit}>
					<label> ID: </label>
					<input
						type="number"
						name="ID"
						className="id-input"
						placeholder="ID"
						required
						onChange={handleAddFormChange}></input>
					<label> Title: </label>
					<input
						name="title"
						type="text"
						className="title-input"
						placeholder="Title"
						required
						onChange={handleAddFormChange}></input>
					<label> Description: </label>
					<textarea
						name="description"
						type="text"
						className="des-input"
						placeholder="Description"
						onChange={handleAddFormChange}></textarea>

					<div>
						<button type="submit" className="btn-create">
							Create
						</button>
						<button type="button" className="btn-create" onClick={sorting}>
							sort
						</button>
						{/* <button type="submit" className="btn-save">
							Save
						</button> */}
					</div>
				</form>
			</div>

			<div>
				{/* Table */}
				<form onSubmit={handleUpdateFormSubmit}>
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
							{todos.map(todo => (
								<Fragment>
									{editTodoId === todo.id ? (
										<EditableRow
											updateFormData={updateFormData}
											handleUpdateFormChange={handleUpdateFormChange}
											handleCancelClick={handleCancelClick}
										/>
									) : (
										<ReadOnlyRow
											todo={todo}
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
