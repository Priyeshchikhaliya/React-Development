import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
	const [contacts, setContacts] = useState(data);
	const [addFormData, setAddFormData] = useState({
		ID: "",
		title: "",
		description: "",
	});

	const [editFormData, setEditFormData] = useState({
		ID: "",
		title: "",
		description: "",
	});

	const [editContactId, setEditContactId] = useState(null);

	const handleAddFormChange = event => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const handleEditFormChange = event => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	const handleAddFormSubmit = event => {
		event.preventDefault();

		const newContact = {
			id: nanoid(),
			ID: addFormData.ID,
			title: addFormData.title,
			description: addFormData.description,
		};

		const newContacts = [...contacts, newContact];
		setContacts(newContacts);
	};

	const handleEditFormSubmit = event => {
		event.preventDefault();

		const editedContact = {
			id: editContactId,
			ID: editFormData.ID,
			title: editFormData.title,
			description: editFormData.description,
		};

		const newContacts = [...contacts];

		const index = contacts.findIndex(contact => contact.id === editContactId);

		newContacts[index] = editedContact;

		setContacts(newContacts);
		setEditContactId(null);
	};

	const handleEditClick = (event, contact) => {
		event.preventDefault();
		setEditContactId(contact.id);

		const formValues = {
			ID: contact.ID,
			title: contact.title,
			description: contact.description,
		};

		setEditFormData(formValues);
	};

	const handleCancelClick = () => {
		setEditContactId(null);
	};

	const handleDeleteClick = contactId => {
		const newContacts = [...contacts];

		const index = contacts.findIndex(contact => contact.id === contactId);
		let confirmAction = window.confirm("Are you sure you want to delete?");
		if (confirmAction) {
			newContacts.splice(index, 1);
			setContacts(newContacts);
		} 
	};
	const sorting = () => {
		console.log("sort");
		let s = [...contacts];
		s.sort((a, b) => a.ID - b.ID);
		setContacts(s);
	};

	const reversesorting = () => {
		console.log("sort");
		let s = [...contacts];
		s.sort((a, b) => a.ID - b.ID).reverse();
		setContacts(s);
	};

	return (
		<div className="app-container">
			<form onSubmit={handleAddFormSubmit} className="form-container">
				<input
					type="number"
					name="ID"
					required="required"
					placeholder="ID"
					onChange={handleAddFormChange}
				/>
				<input
					type="text"
					name="title"
					required="required"
					placeholder="title"
					onChange={handleAddFormChange}
				/>
				<textarea
					type="text"
					name="description"
					required="required"
					placeholder="description"
					onChange={handleAddFormChange}
				/>

				<button type="submit" className="btn-create">
					Create
				</button>
			</form>
			<form onSubmit={handleEditFormSubmit}>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Description</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map(contact => (
							<Fragment>
								{editContactId === contact.id ? (
									<EditableRow
										editFormData={editFormData}
										handleEditFormChange={handleEditFormChange}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<ReadOnlyRow
										contact={contact}
										handleEditClick={handleEditClick}
										handleDeleteClick={handleDeleteClick}
									/>
								)}
							</Fragment>
						))}
					</tbody>
				</table>
				<button type="button" className="btn-sort" onClick={sorting}>
					Sort The List (Ascending)
				</button>
				<button type="button" className="btn-sort" onClick={reversesorting}>
					Sort The List (Descending)
				</button>
			</form>
		</div>
	);
};

export default App;
