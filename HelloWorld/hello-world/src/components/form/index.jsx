import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const hanldleSubmit = () => {
    alert(`User name is ${name}`);
  };

  return (
    <div>
      <form>
        <label>Username </label>
        <input
          name="name"
          text="text"
          value={name}
          onChange={handleName}
        ></input>
        <div>
          <label>Comment </label>
          <textarea value={comment} onChange={handleComment}></textarea>
        </div>
        <div>
          <label>Skill </label>
          <select value={selectedValue} onChange={handleSelect}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <button onClick={hanldleSubmit}>Submit</button>
      </form>
      <h1>Name : {name ? name : "Input a name"} </h1>
      <h2>Comment : {comment}</h2>
    </div>
  );
};
export default Form;
