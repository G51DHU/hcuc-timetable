import './style.css'
import SearchIcon from '../../../assets/magnifying-glass.svg'
import { useEffect, useState } from 'react'
import Software from './software'

export default function ViewSoftware () {
  const [ListOfSoftware, SetListOfSoftware] = useState([])
  const [SoftwareView, SetSoftwareView] = useState([])
  const [SearchQuery, SetSearchQuery] = useState("")

  useEffect(() => {
    window.fetch('http://localhost:8000/list_of_software')
      .then(response => response.json())
      .then(data => SetListOfSoftware(data))
  }, [])

  if (SearchQuery !== ""){
    ListOfSoftware.forEach((software)=>{
      if (software.name.includes(SearchQuery)){
        SoftwareView.push(software)
      }
    })
  }
  else{
    SoftwareView === ListOfSoftware
  }


  return (
    <div className='existing-software'>
      <h2>Existing software</h2>

      <div className='software__search-bar'>
        <img className='software__magnifying-glass' src={SearchIcon} />
        <input className='software__input' type='search' placeholder='Search for existing software...' value={SearchQuery} onChange={e => SetSearchQuery(e.target.value)} />
      </div>

      <div className="software__list-wrapper">
        <div className='software__list'>
          {
            SoftwareView.map((software, index) => <Software key={index} name={software.name} version={software.version} _id={software._id} />)
          }
        </div>
      </div>
    </div>
  )
}
