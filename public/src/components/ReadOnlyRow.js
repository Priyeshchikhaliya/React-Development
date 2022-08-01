import React from "react";
import "..//App.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
	return (
		<tr>
			<td>{contact.ID}</td>
			<td>{contact.title}</td>
			<td>{contact.description}</td>
			<td className="Table-button">
				<button
					type="button"
					onClick={event => handleEditClick(event, contact)}
					className="btn-update">
					Update
				</button>
				<button
					type="button"
					className="btn-delete"
					onClick={() => handleDeleteClick(contact.id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ReadOnlyRow;
