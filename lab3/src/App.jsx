import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import AddToDoComponent from "./components/AddToDoComponent";
import SearchInput from "./components/SearchInput";
import PageTitle from "./components/PageTitle";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ title: "" });
  const [searchTerm, setSearchTerm] = useState("");

  function handleNewTitleChange(event) {
    setNewToDo({ ...newToDo, title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo.title.trim()) {
      const newTodoWithId = { id: Date.now(), ...newToDo };
      setToDos([...toDos, newTodoWithId]);
      setNewToDo({ title: "" });
    } else {
      alert("ToDo title cannot be empty.");
    }
  }

  function handleDelete(id) {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageTitle title="My ToDo App" />
      <AddToDoComponent
        title={newToDo.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
