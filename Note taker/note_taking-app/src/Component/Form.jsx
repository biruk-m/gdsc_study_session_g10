import { useState } from "react";

const Form = () => {
  const [content, setContent] = useState("");
  const [mainTopic, setmainTopic] = useState("");
  const [subTopic, setsubTopic] = useState("");
  const [show,setshow]=useState(true)
  const saveClick =() => {

  }
  return (
    <main>
           <form className="note-form">
        <h1>Note-app</h1>
        <input
          type="text"
          placeholder="Topics"
          className="main-topic"
          // eslint-disable-next-line no-undef
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Sub-topics"
          className="sub-topic"
          value={mainTopic}
          onChange={(event) => {
            setmainTopic(event.target.value);
          }}
        />
        <input 
        type="number"
        placeholder="your number?"
        className="phone"
        maxLength={10}
        />
        <textarea
          value={subTopic}
          onChange={(event) => {
            setsubTopic(event.target.value);
          }}
        />

        <button onClick={saveClick}>save</button>
        <button className="show-btn" type="button">show</button>
      </form>
      {/* {
    
    <div key ={note.id}>
      notes.map((note))= (
      <h2>{note.mainTopic}</h2>
      <h3>{note.subTopic}</h3>
      <p>{note.content}</p>
      <button type="button" onClick={()=> handeldelte(note.id)}>Delete</button>
      <button type="button" onClick={()=> handeledit(note.id)}>Edit</button>
      )
    </div>
      
  } */}
    </main>
    
  );
};

export default Form;