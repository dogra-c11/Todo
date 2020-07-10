import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import FilterTodos from "./components/FilterTodos";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      //state is list of todos
      todos: [],
      backuptodos: [],
    };
  }

  AddTodo = (title) => {
    //this function takes a title and a new todo in todos array
    let todo = {
      title: title,
      active: 1,
    };

    let newtodoarray = [...this.state.backuptodos, todo]; //we cant mutate an existing array so we make a new array and add the new todo in it and set the state.
    this.setState({
      todos: newtodoarray,
      backuptodos: newtodoarray,
    });
  };

  DeleteTodo = (todo) => {
    //this function takes a todo object and deletes that
    let deletetodoindex = this.state.todos.indexOf(todo);
    let todoarray = [...this.state.backuptodos]; //it makes clone of our todos array
    todoarray.splice(deletetodoindex, 1); //remove the todo from our todos array
    this.setState({
      todos: todoarray,
      backuptodos: todoarray,
    });
  };

  UpdateTodo = (todo) => {
    let updatetodoindex = this.state.todos.indexOf(todo);
    let todoarray = [...this.state.backuptodos]; //it makes clone of our todos array
    todoarray[updatetodoindex].active = !todoarray[updatetodoindex].active; //changes 1 to 0 and vive versa in active state of todo object
    this.setState({
      todos: todoarray,
      backuptodos: todoarray,
    });
  };

  FilterTodo = (filter) => {
    switch (filter) {
      case "Active":
        let activetodos = this.state.todos.filter((todo) => todo.active === 1);
        this.setState({
          todos: activetodos,
        });
        break;
      case "Completed":
        let inactivetodos = this.state.todos.filter((todo) => !todo.active);
        this.setState({
          todos: inactivetodos,
        });
        break;
      default:
        this.setState({
          todos: [...this.state.backuptodos],
        });
    }
  };

  render() {
    //we are sending the above todos array and DeleteTodo func as props in ListTodos components ie items also we send AddTodo func as props in inputTodo components.
    return (
      //all components of todo app
      <>
        <InputTodo addTodo={this.AddTodo} />
        <ListTodos
          items={this.state.todos}
          deleteTodo={this.DeleteTodo}
          updateTodo={this.UpdateTodo}
        />
        <FilterTodos
          filters={["All", "Active", "Completed"]}
          filterTodo={this.FilterTodo}
        />
      </>
    );
  }
}
