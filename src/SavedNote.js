import { v4 as uuidv4 } from "uuid";


export default function SavedNote(props) {
    let date = Date.now()
    return (
      <li className="saved-note" keyid={uuidv4()}>
        <span>
          <b>{props.noteTitle} </b>
        </span>
        <p className="note-content"> Content: {props.noteContent} </p>
        <p className="created-date"> Created Date: {date} </p>
      </li>
    );
}
