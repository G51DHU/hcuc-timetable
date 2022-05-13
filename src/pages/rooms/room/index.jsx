import './style.css'
import { useState } from 'react'
import bin_white from "../../../assets/bin_white.png"
import bin_black from "../../../assets/bin_black.png"


export default function Room ({ _id, name, software, ToDelete, SetToDelete}) {
  const [BinWhite, SetBinWhite] = useState(true)
  const [NotClicked, SetNotClicked] = useState(true)

  function OnClick () {
    NotClicked ? SetToDelete([...ToDelete, _id]) : SetToDelete(ToDelete.filter((e) => { return e !== _id }))
    SetNotClicked(!NotClicked)
    SetBinWhite(!BinWhite)
  }
  
  return (
    <details className='room'>
      <summary title={"Room: " + name}>
        <h3> {name} </h3>
        <button>
          <img src={BinWhite? bin_white : bin_black} onClick={()=>OnClick()} alt="Trash icons created by Freepik - Flaticon"/>
        </button>
      </summary>
      <ul>
        {software.map((software, index) => <li key={index}>{software.name}{(index % 2 === 0) ? <br /> : null} </li>)}
      </ul>
    </details>
  )
}
