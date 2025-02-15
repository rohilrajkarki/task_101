import { useState } from "react";
import List from "../components/List";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  const handleSubmit = () => {
    const createdDate = new Date().toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    console.log(inputText, createdDate);
    setListItems([...listItems, inputText]);
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
        {listItems.map((item, index) => (
          <List listItem={item} key={item + index} />
        ))}
      </div>
    </>
  );
};

export default Home;
