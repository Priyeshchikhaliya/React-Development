import React from "react";
import "./editablerow.css";

export const EditableRow = (updateFormData, handleUpdateClick,updateFormSubmit) => {
  return (
    
    <tr>
      <td>
        <input
          type="number"
          name="ID"
          className="id-edit-input"
          placeholder="ID"
          required
          value={updateFormData.ID}
          onChange={handleUpdateClick}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="title"
          className="title-edit-input"
          placeholder="title"
          required
          value={updateFormData.title}
          onChange={handleUpdateClick}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="description"
          className="description-edit-input"
          placeholder="description"
          required
          value={updateFormData.description}
          onChange={handleUpdateClick}
        ></input>
      </td>
      <td>
        <button type="button" >Save</button>
        <button type="button" onClick={updateFormSubmit}>Cancel</button>
      </td>
    </tr>
  );
};
