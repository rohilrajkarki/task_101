import { useState } from "react";
import List from "../components/List";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState<Item[]>([]);

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
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <>
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
            <button onClick={() => removeTodo(id)}>Remove </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Home;
