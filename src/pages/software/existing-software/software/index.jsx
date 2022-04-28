import './style.css'
import { useState } from 'react'
export default function Software ({ name, version, _id, ToDelete, SetToDelete}) {
  const [Clicked, SetClicked] = useState(false)

  function OnClick(){
    if (Clicked){
      SetClicked(!Clicked)
    }
    else{
      SetClicked(true)
    }
    Clicked? SetToDelete(ToDelete.filter((e) => {return e !== _id})) : SetToDelete([...ToDelete, _id])
  }
  return (
    <button className='software-card' onClick={()=>OnClick()} title={`Name = ${name} \nVersion = ${version} \nID = ${_id}`}>
      <div className='software-card__name' title={name}>
        {name}
      </div>
      <div className='software-card__version' title={version}>
        {version}
      </div>
    </button>
  )
}
