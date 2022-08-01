import React from "react";
import "../index.css";

export const ReadOnlyRow = ({ todo1,handleUpdateClick,handleDeleteClick }) => {
  return (
    <tr>
      <td>{todo1.ID}</td>
      <td>{todo1.title}</td>
      <td>{todo1.description}</td>
      <td>
          <button type="button" onClick={(event)=>handleUpdateClick(event,todo1)}>Update</button>
          <button type="button" onClick={()=>handleDeleteClick(todo1.ID)} >Delete</button>
      </td>
      
    </tr>
  );
};
 