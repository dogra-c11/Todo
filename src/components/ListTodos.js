import React from "react";
import Button from "react-bootstrap/Button";

export default class ListTodos extends React.Component {
  constructor() {
    super();
  }
  render() {
    let { items } = this.props;
    let { deleteTodo } = this.props;
    let { updateTodo } = this.props;
    return (
      <>
        <ul>
          {items.map((item) => (
            <li
              style={{
                backgroundColor: !item.active ? "honeydew" : "lavenderblush",
              }}
            >
              <span
                onClick={() => {
                  updateTodo(item);
                }}
                style={{
                  textDecoration: !item.active ? "line-through" : "none", //if todo is not active ie 0 then line through text style.
                }}
              >
                {item.title}
              </span>
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  deleteTodo(item); //send the todo object to deleteTodo func present in Todo.js
                }}
              >
                X
              </Button>{" "}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
