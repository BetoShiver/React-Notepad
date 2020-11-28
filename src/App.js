import React from 'react'
import './App.css';
import './form.css'
import './savedNote.css'
import NotesForm from './NotesForm';
import NotesList from './NotesList';
// import localForage from 'localforage' COULD NOT GET IT TO WORK NO MATTER WHAT WAY I INSTALLED IT

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }


  componentDidMount() {
    let data = window.localStorage.getItem("savedNotes");
    let loadedNotes = JSON.parse(data)
    if (loadedNotes) {
      this.setState(() => {
        return { notes: loadedNotes };
      })
    }
  }

  componentDidUpdate() {
        window.localStorage.setItem(
          "savedNotes",
          JSON.stringify(this.state.notes)
        );
  }

  handleAddNote(newNote) {
    this.setState((state) => {
      return { 
        notes: [newNote, ...state.notes] };
    })
  }

  updateArray(arr) {
    this.setState(() => {
      return { notes: arr}
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-title">Write It Down</h1>
        <NotesForm onAddNote={(newNote) => this.handleAddNote(newNote)} />
        <NotesList
          notes={this.state.notes}
          updateArray={(arr) => this.updateArray(arr)}
        />
      </div>
    );
  }
}


document.body.style.backgroundColor = "#683800";


export default App;
