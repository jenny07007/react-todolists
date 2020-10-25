import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export class TodoForm extends Component {
  state = { task: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const newTask = { ...this.state, id: uuid(), completed: false };
    if (!this.state.task) return;
    this.props.addItem(newTask);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <label htmlFor="task">New Todo</label>
        <div className="input-container">
          <input
            name="task"
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
            placeholder="New Todo"
          />
          <button className="btn-add">ADD TODO</button>
        </div>
      </form>
    );
  }
}
