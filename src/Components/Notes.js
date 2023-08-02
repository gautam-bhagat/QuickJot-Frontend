import React, { useState, useContext, useEffect } from "react";
import Note from "./Note";
import Modal from "react-modal";
import noteContext from "../Context/notes/NoteContext";


Modal.setAppElement("#root");

function Notes() {
  // Context
  // const a = useContext(noteContext)
  const context = useContext(noteContext);
  const { notes, addNoteApi, fetchNotes,editNoteApi } = context;

  useEffect(() => {
    fetchNotes();
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const text = {
    textAlign: "left",
    marginLeft: "30px",
  };

  // MODAL

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [updateModalIsOpen, setUpdateIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // const [noteitem , setNoteItem] = useState[{title:"",description:"",tag:""}]

  const [updateNoteItem , setUpdatenoteItem] = useState({id:"",title:"",description:"",tag:""})
  const openUpdateModal = async (note_item) => {
 
    setUpdatenoteItem(note_item)
    setUpdateIsOpen(true);
  }
  

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setUpdateIsOpen(false);
  }

  //------------- Add note
  const [add_Note, setNote] = useState({
    title: "",
    description: "",
    tag: null,
  });

  const onChange = (e) => {
    // // console.log(e.target.value)
    setNote({ ...add_Note, [e.target.name]: e.target.value });
  };
  
  const onUpdateChange = (e) => {
    
    setUpdatenoteItem({ ...updateNoteItem, [e.target.name]: e.target.value });
  };

  const addNote = async (e) => {
    e.preventDefault();
    let res = await addNoteApi(add_Note);
    if (res.success) {
      closeModal();
    } else {
      alert("Error Occurred");
    }
  };

  const updateNote = async (e) => {
    e.preventDefault();
    // let res = await addNoteApi(add_Note);
    // if (res.success) {
    //   closeModal();
    // } else {
    //   alert("Error Occurred");
    // }
    // console.log(updateNoteItem)
    const res = editNoteApi(updateNoteItem)
    if(res){closeModal()}
  };

  return (
    <div className="notes-page">
      {/* Add note Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="df">
          <h2>Add Note</h2>
          <button className="cross-btn" onClick={closeModal}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>

        <form onSubmit={addNote}>
          <div className="form-ele">
            <input
              style={{ "marginTop": "20px" }}
              minLength={5}
              required
              className="input-form"
              type="text"
              onChange={onChange}
              id="title"
              name="title"
              placeholder="Title"
            />
          </div>
          <div style={{ "marginTop": "20px" }} className="form-ele">
            <textarea
              style={{ minHeight: "100px", resize: "vertical" }}
              minLength={10}
              required
              className="input-form"
              type="text"
              onChange={onChange}
              id="description"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <div style={{ "marginTop": "20px" }} className="form-ele">
            <input
              className="input-form"
              type="text"
              onChange={onChange}
              id="tag"
              name="tag"
              placeholder="Tag"
            />
          </div>
          <div className="form-ele">
            <input type="submit" value="Save" />
          </div>
        </form>
      </Modal>

      {/* Update Note Modal */}
      <Modal isOpen={updateModalIsOpen} onRequestClose={closeModal}>

      <div className="df">
          <h2>Note</h2>
          <button className="cross-btn" onClick={closeModal}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <div className="updatepage">
        
          <form onSubmit={updateNote}>
            <div className="form-ele">
              <input type="hidden" defaultValue={updateNoteItem._id}/>
              <input
                style={{ "marginTop": "20px", width: "85%" }}
                minLength={5}
                required
                className="input-form update-form"
                type="text"
                onChange={onUpdateChange}
                id="title"
                name="title"
                defaultValue={updateNoteItem.title}
                placeholder="Title"
              />
            </div>
            <div style={{ "marginTop": "20px" }} className="form-ele">
              <textarea
                style={{ minHeight: "250px", width: "85%", resize: "none" }}
                minLength={10}
                required
                className="input-form update-form textarea-input"
                type="text"
                onChange={onUpdateChange}
                id="description"
                name="description"
                value={updateNoteItem.description}
                placeholder="Description"
              ></textarea>
            </div>
            <div style={{ "marginTop": "20px" }} className="form-ele">
              <input
                className="input-form update-form"
                type="text"
                onChange={onUpdateChange}
                id="tag"
                name="tag"
                defaultValue={updateNoteItem.tag}
                placeholder="Tag"
                style={{ width: "85%", resize: "none" }}
              />
            </div>
            <div className="form-ele">
              <input className='update-form' type="submit" value="Update" />
            </div>
          </form>
        </div>
      </Modal>

      <div className="note-header">
        <div>
          <h2 style={text}>Notes </h2>
        </div>
        <div>
          <button className="new-note-btn" onClick={openModal }>
            <i className="fa-solid fa-plus"></i> New Note
          </button>
        </div>
      </div>

      <div className="notes-panel">
        {notes.map((note) => {
          return <Note key={note._id} note={note} openUpdateModal={openUpdateModal} />;
        })}
      </div>
    </div>
  );
}

export default Notes;
