import './style.css'
import SearchIcon from "../../../assets/magnifying-glass.svg"
import { useEffect, useState } from 'react'
import Software from './software'
export default function ViewSoftware () {
  const [listOfSoftware, SetListOfSoftware] = useState([])

  useEffect(() => {
    window.fetch('http://localhost:8000/list_of_software')
      .then(response => response.json())
      .then(data => SetListOfSoftware(data))
  }, [])

  return (
    <div className='existing-software'>
      <h2>Existing software</h2>
      
      <div className='software__search-bar'>
        <img className='software__magnifying-glass' src={SearchIcon} />
        <input className='software__input' type='search' placeholder='Search for existing software...' />
      </div>

      <div className='software__list'>
        {
          listOfSoftware.map((software, index) => <Software key={index} name={software.name} version={software.version} _id={software._id} />)
        }
      </div>
    </div>
  )
}
