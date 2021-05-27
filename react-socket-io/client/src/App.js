import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./App.css"

function App() {
  const [ state, setState ] = useState({ message: "", name: "" })
  const [nameSubmit, setNameSubmit] = useState(false)
  const [nameUser, setNameUser]=useState("")
  const [ chat, setChat ] = useState([])

  const socketRef = useRef()
  useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:4000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

  const onNameChange = (e) =>{
    setNameUser(e.target.value)
  }
  const nameSubmitForm =()=>{
    setNameSubmit(true)
  }

  const onContentChange =(e) =>{
    const getNameUser =nameUser;
    console.log(e.target.value)
    
    setState({ ...state, name: getNameUser , message: e.target.value })
    console.log(state)
  }

  const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
    console.log(state)
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
       nameUser == name ? (
        <div>
        <div className="bg1 mb-2 p-2 float-left box-messenger">
          <p className="mb-0 text-messenger text-white">{message} </p>
        </div>
        <div style={{clear: 'both'}} />
      </div>
       ):(
        <div>
        <div className="bg2 mb-2 p-2 float-right box-messenger">
          <p className="mb-0 text-messenger">{message}</p>
        </div>
        <div style={{clear: 'both'}} />
      </div>
       )
			
		))
	}



  

  return (
    nameSubmit ? (
      <div className="box-main">
    <div className="bg1 p-3 box-header">
      <p className="font-weight-bold text-white mb-0">{nameUser}</p>
    </div>
    <div className="p-2 box-content">
    {renderChat()}
      
      
      
    </div>
    <form onSubmit={onMessageSubmit}>
    <div className="pl-2 pt-2 box-bottom">
    
      <div className="box-input">
        <input onChange={(e) => onContentChange(e)} value={state.message} name="message"
            placeholder="Please a reply" 
            className="bg2 pl-2 input-text" 
            type="text" />
      </div>
      <div className="px-2 box-button">
        <button className="bg1 text-center reply-button">
          <i className="fa fa-paper-plane text-white button-icon" aria-hidden="true" />
        </button>
      </div>
      
    </div>
    </form>
  </div>
    ):(
      <form onSubmit={nameSubmitForm}>
        <input name="name" onChange={(e) => onNameChange(e)} value={nameUser.name}></input>
        <button>vvcvc</button>
      </form>
    )
  )
}

export default App