import SavedNote from "./SavedNote";
import { v4 as uuidv4 } from "uuid";

export default function NotesList(props) {
  let list = props.notes.map((object, index) => {

    let handleDeleteBtn = (e) => {
      const notesTemp = Object.assign([], props.notes)
      notesTemp.splice(index, 1)
      props.deleteNote(notesTemp);
    }

    let key = uuidv4();
    return (
      <SavedNote
        key={key}
        keyid={key}
        noteTitle={object.noteTitle}
        noteContent={object.noteContent}
        handleDeleteBtn={ (e) => handleDeleteBtn(e) }
      />
    );
  });

  return <ul className="notes-list">{list}</ul>;
}
