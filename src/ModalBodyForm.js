import React, { Component } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./form.css";

export default class ModalBodyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteContent: this.props.noteContent,
      noteTitle: this.props.noteTitle,
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onEditNote(this.state);
    this.setState({ noteContent: "", noteTitle: "" });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="Add a title?"
          className="formTitle"
          onChange={this.updateTitle}
                value={this.state.noteTitle}
                autoComplete='off'
        />
        <TextareaAutosize
          rowsMax={36}
          rowsMin={8}
          aria-label="empty textarea"
          className="form-content"
          name="content"
          onChange={this.updateContent}
          value={this.state.noteContent}
          required
        />
        <hr />
        <Button
          className="modal-btn"
          variant="secondary"
          onClick={(e) => this.props.handleClose(e)}
        >
          Cancel
        </Button>
        <Button className="modal-btn" variant="info" type="submit">
          Edit Note
        </Button>
      </form>
    );
  }
}
