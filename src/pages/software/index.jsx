import './style.css'
import ExistingSoftware from './existing-software'
import AddSoftware from './add-software'
import { useState } from 'react'
import ViewSoftware from './existing-software'

export default function Software () {
  const STYLE = {
    "button-active":{
      "backgroundColor" : "grey"
    }
  }
  
  const [active, setActive] = useState("view")

  return (
    <div className='software'>
      <h1 className='software__title'>Software</h1>
      <div className='software__view-and-add-switch'>
        <button className='software__view-software-button' style={active === "view" ? STYLE["button-active"] : null} onClick={e => setActive("view")} > View Software </button>
        <button className='software__add-software-button' style={active === "add" ? STYLE["button-active"] : null} onClick={e => setActive("add")} > Add software </button>
      </div>
        {
          active === "view" ? <ViewSoftware /> : <AddSoftware />
        }
    </div>
  )
}
