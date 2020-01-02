import React, { Component } from "react";

export class Todo extends Component {
  state = { isEditing: false, task: this.props.task };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.handleUpdateItem(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  handleChage = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleToggle = e => {
    this.props.handleCompletion(this.props.id);
  };

  renderIsEditing = () => {
    let result;
    if (this.state.isEditing) {
      result = (
        <>
          <form className="form-edit" onSubmit={this.handleUpdate}>
            <input
              type="text"
              className="form-edit-input"
              value={this.state.task}
              onChange={this.handleChage}
              name="task"
            />
            <button className="form-edit-btn">SAVE</button>
          </form>
        </>
      );
    } else {
      result = (
        <>
          <span
            onClick={this.handleToggle}
            className={this.props.completed ? "todos completed" : "todos"}
          >
            {this.props.task}
          </span>
          <span className="icons">
            <i className="fas fa-edit" onClick={this.toggleForm} />
            <i
              className="far fa-trash-alt"
              onClick={this.props.handleDeleteItem}
            />
          </span>
        </>
      );
    }
    return result;
  };

  render() {
    return <>{this.renderIsEditing()}</>;
  }
}
