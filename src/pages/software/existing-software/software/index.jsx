import './style.css'
import { useState } from 'react'
export default function Software ({ name, version, _id, ToDelete, SetToDelete }) {
  const [IsClicked, SetIsClicked] = useState(false)
  const STYLE = {
    active : {
      "border": "2px solid black"
    }
  }
  
  function OnClick () {
    if (IsClicked) {
      SetIsClicked(!IsClicked)
    } else {
      SetIsClicked(true)
    }
    IsClicked ? SetToDelete(ToDelete.filter((e) => { return e !== _id })) : SetToDelete([...ToDelete, _id])
  }

  return (
    <button className='software-card' style={IsClicked ? STYLE["active"] : null} onClick={() => OnClick()} title={`Name = ${name} \nVersion = ${version} \nID = ${_id}`}>
      <div className='software-card__name' title={name}>
        {name}
      </div>
      <div className='software-card__version' title={version}>
        {version}
      </div>
    </button>
  )
}
