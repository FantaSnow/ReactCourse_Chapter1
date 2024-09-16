import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import AddToDOComponent from "./components/AddToDoComponent";
import SearchInput from "./components/SearchInput";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ title: "" });
  const [searchTerm, setSearchTerm] = useState("");

  function handleNewTitleChange(event) {
    setNewToDo({ id: Math.random(), title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo.title.trim()) {
      setToDos([...toDos, newToDo]);
      setNewToDo({ title: "" });
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
      <AddToDOComponent
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
