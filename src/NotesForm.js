import React, { Component } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
export default class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteContent: "",
      noteTitle: "",
    };
  }

  updateTitle = (event) => {
    const value = event.target.value;
    this.setState({ noteTitle: value });
  };

  updateContent = (event) => {
    const value = event.target.value;
    this.setState({ noteContent: value });
  };

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.onAddNote(this.state)
    this.setState({ noteContent: "", noteTitle: '' });
  }

  render() {
    return (
      <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="What is this about?"
          className="formTitle"
          autoComplete ='off'
          onChange={this.updateTitle}
          value={this.state.noteTitle}
        />
        <TextareaAutosize
          rowsMax={36}
          rowsMin={8}
          aria-label="empty textarea"
          placeholder="Tell me about it..."
          className="form-content"
          name="content"
          onChange={this.updateContent}
          value={this.state.noteContent}
          required
        />
        <Button type="submit" className="addBtn">
          {" "}
          Add Note
        </Button>
      </form>
    );
  }
}
