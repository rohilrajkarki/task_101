import { useState } from "react";
import List from "../components/List";
import Modal from "../components/Modal";
import "./Home.scss";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<number>();

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

  const removeTodo = () => {
    setTodoItems((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== selectedTodo)
    );
    setShowModal(false);
  };

  const toggleComeletion = (id: number) => {
    const updatedTodos = [...todoItems];

    updatedTodos.filter((item) => item.id === id)[0].completed =
      !updatedTodos.filter((item) => item.id === id)[0].completed;

    setTodoItems(updatedTodos);
  };
  return (
    <div className="home">
      <div className="todo_main_container">
        <div>
          TODO List:
          <input
            placeholder="Enter a task here"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button onClick={addTodo}>Create</button>
        </div>
        <div>
          {todoItems.map(
            ({ id, text, createdDate, createdTime, completed }) => (
              <li key={id}>
                {/* <List
                listItem={text + " " + createdDate + " " + createdTime}
                itemId={id}
                key={id}
              /> */}
                <input
                  type="checkbox"
                  id={id.toString()}
                  onChange={() => toggleComeletion(id)}
                />
                <label
                  htmlFor={id.toString()}
                  style={{
                    textDecoration: completed ? "line-through" : "none",
                  }}
                >
                  {completed}
                  {text + " " + createdDate + " " + createdTime}
                </label>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setSelectedTodo(id);
                  }}
                >
                  Remove
                </button>
              </li>
            )
          )}
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
