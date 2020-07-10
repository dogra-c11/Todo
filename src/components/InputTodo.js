import React from "react";

export default class InputTodo extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    let { addTodo } = this.props;
    return (
      <>
        <input
          type="text"
          placeholder="What needs to be done?"
          ref={this.inputRef}
        ></input>
        <button
          onClick={() => {
            if (this.inputRef.current.value)
              //if value is typed
              addTodo(this.inputRef.current.value); //send the value types as argument bcz addTodo func takes title as an argument.
          }}
        >
          Add todo
        </button>
      </>
    );
  }
}
