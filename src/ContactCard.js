import React,{useState} from 'react'

function ContactCard(props) {

    const [showAge, setShowAge] = useState(false)
  return (
    <div className="contact-card">
      <img src={props.avatarUrl} 
      alt="profile"/>
      <div className='user-details'>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={()=> setShowAge(!showAge)}>showAge</button>
        {showAge && <p>{props.age}</p>}
        
      </div>
      <div>
        
      </div>
    </div>
    
  )
}

export default ContactCard