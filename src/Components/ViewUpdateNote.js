import React from 'react'

function ViewUpdateNote() {


    const onChange = ()=>{
        
    }
  return (
    <div className='updatepage'>
      
      <form>
          <div className="form-ele">
            <input
              style={{ "margin-top": "20px" ,"width":"85%"}}
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
          <div
            style={{ "margin-top": "20px", }}
            className="form-ele"
          >
            <textarea
              style={{ "minHeight": "250px","width":"85%",resize: "none"  }}
              minLength={10}
              required
              className="input-form textarea-input"
              type="text"
              onChange={onChange}
              id="description"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <div style={{ "margin-top": "20px" }} className="form-ele">
            <input
              className="input-form"
              type="text"
              onChange={onChange}
              id="tag"
              name="tag"
              placeholder="Tag" style={{"width":"85%",resize: "none"  }}
            />
          </div>
          <div className="form-ele">
            <input type="submit" value="Update" />
          </div>
        </form>
    </div>
  )
}

export default ViewUpdateNote
