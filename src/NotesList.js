import SavedNote from "./SavedNote";
import { v4 as uuidv4 } from "uuid";

export default function NotesList(props) {
  let list = props.notes.map((object, index) => {

    let handleDeleteBtn = (e) => {
      const notesTemp = Object.assign([], props.notes)
      notesTemp.splice(index, 1)
      props.updateArray(notesTemp);
    }

    let handleEdit = (e) => {
      const notesTemp = Object.assign([], props.notes);
      notesTemp[index] = e
      props.updateArray(notesTemp);
    }

    let key = uuidv4();
    return (
      <SavedNote
        key={key}
        keyid={key}
        noteTitle={object.noteTitle}
        noteContent={object.noteContent}
        createdDate={object.createdDate}
        editDate ={object.editDate}
        handleDeleteBtn={(e) => handleDeleteBtn(e)}
        handleEdit={(e) => handleEdit(e)}
      />
    );
  });

  return <ul className="notes-list">{list}</ul>;
}
