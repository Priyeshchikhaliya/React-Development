import "./index.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

export default function App() {
	const [todo, setTodo] = useState();
	let [addFormData, setAddFormData] = useState({
		id: "",
		title: "",
		description: "",
	});

	// Handling change in input fields
	const handleAddFormChange = event => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	// Changing form data
	const handleAddFormSubmit = event => {
		event.preventDefault();

		const newContact = {
			id1: nanoid(),
			id: addFormData.id,
			title: addFormData.title,
			description: addFormData.description,
		};
		const newContacts = [...todo, newContact];
		setTodo(newContacts);
	};
	return (
		<div className="form-container">
			<form className="form" onSubmit={handleAddFormSubmit}>
				<label> ID: </label>
				<input
					type="number"
					name="id"
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
					<button type="submit" className="btn-save">
						Save
					</button>
				</div>
			</form>
			<div>
				<form>
					<table className="table">
						<tr className="row">
							<th> ID </th>
							<th> Title </th>
							<th> Description </th>
							<th> Action </th>
						</tr>
						<tbody className="row">
							{todo.map(todo1 => (
								<tr>
									<td>todo1.id</td>
									<td>todo1.title</td>
									<td>todo1.description</td>
								</tr>
							))}
							
						</tbody> 
					</table>
				</form>
			</div>
		</div>
	);
}
{/* <td className="Table-button">
	<button type="submit" className="btn-update">
		Update
	</button>

	<button type="submit" className="btn-delete">
		Delete
	</button>
</td>; */}