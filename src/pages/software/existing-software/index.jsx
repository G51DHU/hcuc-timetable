import './style.css'
import SearchIcon from '../../../assets/magnifying-glass.svg'
import { useEffect, useState } from 'react'
import Software from './software'

export default function ExistingSoftware () {
  function GetSoftware(){
    window.fetch('http://10.52.23.208:8000/list_of_software')
    .then(response => response.json())
    .then(data => SetListOfSoftware(data))
  }

  const [ListOfSoftware, SetListOfSoftware] = useState(GetSoftware())
  const [SearchQuery, SetSearchQuery] = useState('')
  const [ToDelete, SetToDelete] = useState([])



  useEffect(() => {
    GetSoftware()
  }, [ToDelete, SearchQuery])

  function DeleteSelectedSoftware (ToDelete) {
    console.log(JSON.stringify(ToDelete))
    window.fetch('http://10.52.23.208:8000/delete_software', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content
      },
      body: JSON.stringify({ software_list: ToDelete })
    })
    .then(response => response.json())
    SetToDelete([])
  }

  return (
    <div className='existing-software'>
      <h2>Existing software</h2>

      <div className='software__search-bar'>
        <img className='software__magnifying-glass' src={SearchIcon} />
        <input className='software__input' type='search' placeholder='Search for existing software...' value={SearchQuery} onChange={e => SetSearchQuery(e.target.value)} />
      </div>

      <div>
        <div>{ToDelete.length} Selected</div>
        {ToDelete.length >= 1 ? <button className='software_click-to-delete' onClick={() => DeleteSelectedSoftware(ToDelete)}>Click to delete</button> : null}
      </div>

      <div className='software__list-wrapper'>
        <div className='software__list'>
          {
            ListOfSoftware?.map((software, index) => software.name.match(SearchQuery) ? <Software key={index} name={software.name} version={software.version} _id={software._id} ToDelete={ToDelete} SetToDelete={SetToDelete} /> : null)
          }
        </div>
      </div>
    </div>
  )
}
