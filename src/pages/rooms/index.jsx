import './style.css'
import { useState, useEffect } from 'react'
import Room from './room'
import AddRooms from './add-rooms'

/* need to add delete */

export default function Rooms () {
  const [ListOfRooms, SetListOfRooms] = useState([])
  const [PlusOrMinus, SetPlusOrMinus] = useState('+')

  function GetRooms () {
    window.fetch('http://192.168.1.211:8000/rooms')
      .then(response => response.json())
      .then(data => SetListOfRooms(data))
    console.log(ListOfRooms)
  }

  useEffect(() => {
    GetRooms()
  }, [])

  return (
    <div className='rooms'>
      <h1>Rooms</h1>
      <div className='rooms__row-wrapper'>
        <div className='rooms__row'>
          {ListOfRooms.length === 0 ? null :  ListOfRooms.map((room, index) => <Room key={index} _id={room._id} name={room.name} software={room.software} />)}
        </div>
      </div>
      {PlusOrMinus === '+' ? null : <AddRooms />}
      <div className='rooms__add--deactivated' onClick={() => SetPlusOrMinus((PlusOrMinus === '+') ? '-' : '+')}>{PlusOrMinus}</div>
    </div>
  )
}
