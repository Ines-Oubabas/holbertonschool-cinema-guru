import { useState } from "react";
import SearchBar from "./components/general/SearchBar";
import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";

function App() {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [sort, setSort] = useState("default");

  return (
    <div className="App">
      <SearchBar title={title} setTitle={setTitle} />

      <br /><br />

      <Input
        label="Username"
        type="text"
        value={username}
        setValue={setUsername}
        inputAttributes={{ placeholder: "Enter username" }}
      />

      <br /><br />

      <SelectInput
        label="Sort"
        options={["default", "latest", "oldest", "highestrated", "lowestrated"]}
        value={sort}
        setValue={setSort}
      />

      <br /><br />

      <Button
        label="Click me"
        onClick={() => console.log("Button clicked")}
      />
    </div>
  );
}

export default App;