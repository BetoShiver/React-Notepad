import { format } from "date-fns";
import NoteModal from './NoteModal'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react'

export default class SavedNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.noteTitle,
      content: this.props.noteContent,
    };
    this.keyid = props.keyid;
    this.date = Date.now();
    this.createdDate = format(this.date, "MMMM do, yyyy H:mma");
  }

  EditNote(obj) {
    let editDate = format(Date.now(), "MMMM do, yyyy H:mma");
    this.setState((state) => {
      return {
        title: obj.noteTitle,
        content: obj.noteContent,
        editDate: editDate,
      };
    });
  }

  render() {
    return (
      <li className="saved-note" keyid={this.keyid}>
        <span>
          <b>{this.state.title} </b>
        </span>
        <p className="note-content"> {this.state.content} </p>
        <p className="created-date"> Created Date: {this.createdDate} </p>
        {this.state.editDate && (
          <p className="created-date">Last Edit: {this.state.editDate} </p>
        )}
        <NoteModal
          title={this.state.title}
          content={this.state.content}
          date={this.createdDate}
          EditNote={(obj) => this.EditNote(obj)}
          editDate = {this.editDate}
        />
        <Button
          className="delete-btn"
          variant="danger"
          onClick={(e) => {
            if (window.confirm("Are you sure you want to delete your note?")) {
              this.props.handleDeleteBtn(this.keyid);
            }
          }}
        >
          Delete
        </Button>
      </li>
    );
  }
}

