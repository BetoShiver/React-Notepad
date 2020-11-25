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

  deleteNote(arr) {
    console.log(arr)
    this.setState(() => {
      return { notes: arr}
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>My Notes</h1>
        <NotesForm onAddNote={(newNote) => this.handleAddNote(newNote)} />
        <NotesList
          notes={this.state.notes}
          deleteNote={(arr) => this.deleteNote(arr)}
        vfvv/>
      </div>
    );
  }
}


document.body.style.backgroundColor = 'lightgray';


export default App;
