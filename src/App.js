import React from 'react'
import './App.css';
import './form.css'
import './savedNote.css'
import NotesForm from './NotesForm';
import NotesList from './NotesList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  handleAddNote(newNote) {
    this.setState((state) => {
      return { notes: [newNote, ...state.notes] };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My Notes</h1>
        <NotesForm onAddNote={(newNote) => this.handleAddNote(newNote)} />
        <NotesList notes = {this.state.notes}/>
      </div>
    );
  }
}


document.body.style.backgroundColor = 'lightgray';


export default App;
