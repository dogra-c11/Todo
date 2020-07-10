import React from "react";

export default class FilterTodos extends React.Component {
  constructor() {
    super();
  }
  render() {
    let { filters } = this.props;
    let { filterTodo } = this.props;
    return (
      <>
        {filters.map((filter) => {
          return <button onClick={() => filterTodo(filter)}>{filter}</button>;
        })}
      </>
    );
  }
}
