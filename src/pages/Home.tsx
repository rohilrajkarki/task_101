import { useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const submitTask = () => {
    console.log(inputText);
  };
  return (
    <div>
      Home
      <input
        placeholder="Enter a task"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={submitTask} title="Create" />
    </div>
  );
};

export default Home;
