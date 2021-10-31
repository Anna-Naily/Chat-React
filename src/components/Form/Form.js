import React, { useRef, useState } from "react";
export const Form = props => {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newArray = [...props.array];
    if (newArray.length === 0) {
      newArray.push({ author: "User", text: text, id: 1 });
    } else {
      newArray.push({
        author: "User",
        text: text,
        id: newArray[newArray.length - 1].id + 1,
      });
    }
    props.updateArray(newArray);
    setText("");
  };

  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <input
        className="form-block__input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите сообщение"
      />
      <input className="form-block__btn" type="submit" value="Отправить" />
    </form>
  );
};
