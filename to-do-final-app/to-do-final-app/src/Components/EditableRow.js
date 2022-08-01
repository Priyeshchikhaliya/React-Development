import React from "react";
import "./editablerow.css";

export const EditableRow = (
	updateFormData,
	handleUpdateFormChange,
	handleCancelClick
) => {
	return (
		<tr>
			<td>
				<input
					type="number"
					required="required"
					placeholder="ID"
					name="ID"
					className="id-edit-input"
					value={updateFormData.ID}
					onChange={handleUpdateFormChange}></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="title"
					name="title"
					className="title-edit-input"
					value={updateFormData.title}
					onChange={handleUpdateFormChange}></input>
			</td>
			<td>
				<textarea
					type="text"
					required="required"
					placeholder="description"
					name="description"
					className="description-edit-input"
					value={updateFormData.description}
					onChange={handleUpdateFormChange}></textarea>
			</td>

			<td>
				<button type="submit">Save</button>
				<button type="button" onClick={handleCancelClick}>
					Cancel
				</button>
			</td>
		</tr>
	);
};
