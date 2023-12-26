import { useState } from "react"
import { ReactDOM } from "react-dom/client"
const form = () =>{
    const [mainTopic, setmaintopic]=useState('');
    const [subTopic, setSubtopic]=useState('');
    const [content, setcontent]=useState('');
    return 
    <main>
        <h1>TakingNOte</h1>
        <form className="form">
            <input 
            type="text"
             placeholder="main topic"
             className="mainTopic"
             value={MainTopic}
             onChange={(event)=>{
                // setmaintopic {event.target.value};
             }}
             >
             </input>
            <input type="text" 
            placeholder="sub"
            className="subTopic"
             value={SubTopic}
             onChange={(event)=>{
                // setSubtopic{event.target.value};
             }}
            >
            </input>
            <textarea/>
            <button >save</button>
        </form>
    </main>
}
export default form