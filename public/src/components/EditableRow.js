import React from "react";
import "./editablerow.css";

const EditableRow = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}) => {
	return (
		<tr>
			<td>
				<input
					type="number"
					required="required"
					placeholder="ID"
					name="ID"
					value={editFormData.ID}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="title"
					name="title"
					value={editFormData.title}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="description"
					name="description"
					value={editFormData.description}
					onChange={handleEditFormChange}></input>
			</td>

			<td>
				<button type="submit" className="btn-save">
					Save
				</button>
				<button
					type="button"
					className="btn-cancel"
					onClick={handleCancelClick}>
					Cancel
				</button>
			</td>
		</tr>
	);
};

export default EditableRow;
