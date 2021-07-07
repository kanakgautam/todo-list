import react, { useState } from "react";
import Todo from "./todo"

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value
    setInputText(newValue);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    })
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((element, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div className="container">
      <h1 className="heading">Todo-List</h1>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}></input>
        <button onClick={handleClick} className="button-input">Add</button>
      </div>
      <div>
        <ul className="list">
          {items.map((element, index) => {
            return <Todo value={element} key={index} pos={index} deleteItem={deleteItem} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
