import { useState } from "react";
import List from "../components/List";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState<Item[]>([]);

  const handleSubmit = () => {
    const [createdDate, createdTime] = new Date()
      .toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .split(", ");

    console.log(inputText, createdDate, "time", createdTime, typeof listItems);

    setListItems((prev) => [
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

  return (
    <>
      <div>
        Home
        <input
          placeholder="Enter a task"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit}>Create</button>
      </div>
      <div>
        {listItems.map(({ id, text, createdDate, createdTime }) => (
          <List
            listItem={text + " " + createdDate + " " + createdTime}
            key={id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
