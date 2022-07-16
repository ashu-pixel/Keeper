import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {
  
  const [isExpanded , setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  async function submitNote(event) {
    event.preventDefault();
    if(note.title === "" && note.content === "") {
      alert("Fields can not be empty!")
      return 
    } 

    

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })  ; 
    setExpanded(false)  ;
  }

  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note" >
        {
          isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        }
        <textarea
        onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {isExpanded? 3 : 1 }
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
        </form>
    </div>
  );
}

export default CreateArea;
