import React from "react";

const AddToDOComponent = ({ title = "", onTitleChange, onSubmit }) => {
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

export default AddToDOComponent;
