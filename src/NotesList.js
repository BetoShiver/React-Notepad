import SavedNote from "./SavedNote";
import { v4 as uuidv4 } from "uuid";


export default function NotesList(props) {
    let list = props.notes.map((object) => (
      <SavedNote
        key={uuidv4()}
        noteTitle={object.noteTitle}
        noteContent={object.noteContent}
      />
    ));

  return <ul className ='notes-list'>{list}</ul>;
}
