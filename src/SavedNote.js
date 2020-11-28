import { format } from "date-fns";
import NoteModal from './NoteModal'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react'

export default class SavedNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: this.props.noteTitle,
      noteContent: this.props.noteContent,
      createdDate: this.props.createdDate,
      editDate: this.props.editDate
    };
    this.keyid = props.keyid;
  }

  EditNote(obj) {
    let editDate = format(Date.now(), "MMMM do, yyyy H:mma");
    this.setState((state) => {
      return {
        noteTitle: obj.noteTitle,
        noteContent: obj.noteContent,
        editDate: editDate
      };
    });
  }

  componentDidUpdate() {
       this.props.handleEdit(this.state);
 
  }

  render() {
    console.log(this.props)
    return (
      <li className="saved-note" keyid={this.keyid}>
        <span>
          <b>{this.state.noteTitle} </b>
        </span>
        <p className="note-content"> {this.state.noteContent} </p>
        <p className="created-date"> Created Date: {this.props.createdDate} </p>
        {this.state.editDate && (
          <p className="created-date">Last Edit: {this.state.editDate} </p>
        )}
        <NoteModal
          noteTitle={this.state.noteTitle}
          noteContent={this.state.noteContent}
          createdDate={this.state.createdDate}
          EditNote={(obj) => this.EditNote(obj)}
          editDate={this.state.editDate}
        />
        <Button
          className="delete-btn"
          variant="dark"
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

