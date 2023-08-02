import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

function Note(props) {


  const cxt = useContext(NoteContext)
  const {deleteNoteApi} = cxt

  const {openUpdateModal} = props
  
  return (
    <div className='note' >
      <p className="title">{props.note.title.length > 49 ?  props.note.title.substring(0,50) + "..." : props.note.title}</p>
      <p className="description">{props.note.description.substring(0,250)+"..."}</p>
      <div className='tag'><span >{props.note.tag ? "#"+props.note.tag : ""}</span>

      <button className='del-btn' onClick={()=>{deleteNoteApi(props.note._id)}}><i className="fa-solid fa-trash"></i></button>
      <button className='del-btn' onClick={()=>{openUpdateModal(props.note)}}><i class="fa-solid fa-pen-to-square"></i></button></div>
      
    </div>
  )
}

export default Note
