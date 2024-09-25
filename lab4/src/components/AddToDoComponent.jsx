import React from "react";

const AddToDoComponent = ({ title = "", onTitleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={title}
        onChange={onTitleChange}
        placeholder="Add new ToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDoComponent;
