import { format } from "date-fns";

export default function SavedNote(props) {
  let keyid = props.keyid;
  let date = Date.now();
  date = format(date, "MMMM do, yyyy H:mma");
  return (
    <li className="saved-note" keyid={keyid}>
      <span>
        <b>{props.noteTitle} </b>
      </span>
      <p className="note-content"> Content: {props.noteContent} </p>
      <p className="created-date"> Created Date: {date} </p>
      <button onClick={e => {
        if (window.confirm('Are you sure you want to delete your note?')){
        props.handleDeleteBtn(keyid)
      }
      }}>Delete</button>
    </li>
  );
}
