import { format } from "date-fns";
import NoteModal from './NoteModal'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react'

export default class SavedNote extends Component {
  constructor(props) {
    super(props)
    this.keyid= props.keyid;
    this.date= Date.now();
    this.date= format(this.date, "MMMM do, yyyy H:mma");
  }
  
  render() {
    return (
      <li className="saved-note" keyid={this.keyid}>
        <span>
          <b>{this.props.noteTitle} </b>
        </span>
        <p className="note-content"> {this.props.noteContent} </p>
        <p className="created-date"> Created Date: {this.date} </p>
        <NoteModal title={this.props.noteTitle} content={this.props.noteContent} createdDate={this.date}/>
        <Button
          className="delete-btn"
          variant="primary"
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

