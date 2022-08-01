import React from "react";
import "../index.css";

export const ReadOnlyRow = ({ todo, handleUpdateClick, handleDeleteClick }) => {
	return (
		<tr>
			<td>{todo.ID}</td>
			<td>{todo.title}</td>
			<td>{todo.description}</td>
			<td>
				<button type="button" onClick={event => handleUpdateClick(event, todo)}>
					Edit
				</button>
				<button type="button" onClick={() => handleDeleteClick(todo.id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};
