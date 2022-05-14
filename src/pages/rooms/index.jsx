import './style.css'
import { useState, useEffect } from 'react'
import Room from './room'
import AddRooms from './add-rooms'

/* need to add delete */

export default function Rooms () {
  const [ListOfRooms, SetListOfRooms] = useState([])
  const [PlusOrMinus, SetPlusOrMinus] = useState('+')
  const [ToDelete, SetToDelete] = useState([])

  function GetRooms () {
    window.fetch('http://192.168.1.211:8000/rooms')
      .then(response => response.json())
      .then(data => SetListOfRooms(data))
  }

  function DeleteSelectedRooms (ToDelete) {
    window.fetch('http://192.168.1.211:8000/rooms', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ room_list: ToDelete })
    })
      .then(response => response.json())
    SetToDelete([])
    GetRooms()
  }

  useEffect(() => {
    GetRooms()
  }, [])

  return (
    <div className='rooms'>
      <h1>Rooms</h1>
      <div className='software__delete'>
        <p>{ToDelete.length} Selected</p>
        {ToDelete.length >= 1 ? <button onClick={() => DeleteSelectedRooms(ToDelete)}>Click to delete</button> : null}
      </div>
      <div className='rooms__row-wrapper'>
        <div className='rooms__row'>
          {ListOfRooms.length === 0 ? null : ListOfRooms.map((room, index) => <Room key={index} _id={room._id} name={room.name} software={room.software} ToDelete={ToDelete} SetToDelete={SetToDelete} />)}
        </div>
      </div>
      {PlusOrMinus === '+' ? null : <AddRooms ReloadRooms={GetRooms} />}
      <div className='rooms__add--deactivated' onClick={() => SetPlusOrMinus((PlusOrMinus === '+') ? '-' : '+')}>{PlusOrMinus}</div>
    </div>
  )
}
