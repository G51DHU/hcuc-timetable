import './style.css'
import { useState } from 'react'

export default function Software ({ name, version, _id, ToDelete, SetToDelete }) {
  const [NotClicked, SetNotClicked] = useState(true)
  const STYLE = {
    active : {
      "border": "2px solid black"
    }
  }
  

  function OnClick () {
    NotClicked ? SetToDelete([...ToDelete, _id]) : SetToDelete(ToDelete.filter((e) => { return e !== _id }))
    SetNotClicked(!NotClicked)
  }

  return (
    <button className='software-card' style={NotClicked ? null :  STYLE["active"]} onClick={OnClick} title={`Name = ${name} \nVersion = ${version} \nID = ${_id}`}>
      <div className='software-card__name' title={name}>
        {name}
      </div>
      <div className='software-card__version' title={version}>
        {version}
      </div>
    </button>
  )
}
