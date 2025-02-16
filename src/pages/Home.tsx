import { useState } from "react";
import List from "../components/List";
import Modal from "../components/Modal";
import "./Home.scss";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState<Item[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addTodo = () => {
    const [createdDate, createdTime] = new Date()
      .toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .split(", ");

    setTodoItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputText,
        createdDate,
        createdTime,
        completed: false,
        deadline: "",
      },
    ]);
    setInputText("");
  };

  const removeTodo = (id: number) => {
    console.log(id, "sdsds");
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="home">
      <div className="main_container">
        <div>
          TODO
          <input
            placeholder="Enter a task"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button onClick={addTodo}>Create</button>
        </div>
        <div>
          {todoItems.map(({ id, text, createdDate, createdTime }) => (
            <li key={id}>
              <List
                listItem={text + " " + createdDate + " " + createdTime}
                key={id}
              />
              <button onClick={() => setShowModal(true)}>Remove </button>
            </li>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal
          text="Delete"
          OnCloseClick={setShowModal}
          OnOkClick={removeTodo}
        />
      )}
    </div>
  );
};

export default Home;
