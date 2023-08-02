import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Fetch All Notes
  const fetchNotes = async () => {
    const res = await fetch("https://dark-gold-caterpillar-veil.cyclic.cloud/api/notes/fetchall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authtoken"),
      },
    });

    const json = await res.json()

    setNotes(json)
  };

  //Add a Note
  const addNoteApi = async (argNote) => {
    let note = null;
    const { title, description, tag } = argNote;

    //Todo Api call

    const response = await fetch("https://dark-gold-caterpillar-veil.cyclic.cloud/api/notes/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authtoken"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });

    const json = await response.json();

    console.log(json);
    if (json.success) {
      note = json.saved;
      setNotes(notes.concat(note));
      const ress = { success: true };
      return ress;
    } else {
      const ress = { success: false };
      return ress;
    }
  };
  //Delete a Note
  const editNoteApi = async (argNote) => {
    // console.log(note)
    const { _id,title, description, tag } = argNote;

    //Todo Api call
    

    const response = await fetch("https://dark-gold-caterpillar-veil.cyclic.cloud/api/notes/updatenote", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authtoken"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
        _id : _id
      }),
    });

    const json = await response.json();

    console.log(json);

    let newNotesDeepCopy = JSON.parse(JSON.stringify(notes))

    if (json.success) {
     
      const ress = { success: true };
      for(let index=0;index < newNotesDeepCopy.length;index++){
        // console.log(notes[index]._id)
        const element = newNotesDeepCopy[index];
        if(element._id === _id){
          newNotesDeepCopy[index].title = title;
          newNotesDeepCopy[index].description = description;
          newNotesDeepCopy[index].tag = tag;
          break;
          
        }
      }
      setNotes(newNotesDeepCopy)
      return ress;
    } else {
      const ress = { success: false };
      return ress;
    }

    
  };
  //Update a Note
  const deleteNoteApi = async (id) => {

    const url = 'https://dark-gold-caterpillar-veil.cyclic.cloud/api/notes/deletenote';
    console.log(url)
    const res = await fetch(url,{
      method : 'DELETE',
      headers : {
        'Content-Type' : 'application/json',
        'auth-token' : localStorage.getItem('authtoken')
      },
      body : JSON.stringify({id})
    })

    const json = await res.json();

    console.log(json)

    console.log(id);
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };

  const[ noteItem , setNoteItem] = useState({_id : "",title:"",description:"",tag:""})

  const [isLogged,setIsLogged] = useState(false)

  return (
    <noteContext.Provider
      value={{isLogged,setIsLogged, notes, setNotes, addNoteApi, editNoteApi, deleteNoteApi,fetchNotes ,noteItem,setNoteItem}}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
