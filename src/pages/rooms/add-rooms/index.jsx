import { useState, useEffect } from 'react'
import './style.css'

export default function AddRooms ({ReloadRooms}) {
  const STYLE = {
    'add-rooms__software--added': {
      backgroundColor: 'lightblue'
    }
  }
  const [ListOfSoftware, SetListOfSoftware] = useState([])
  const [SelectedSoftware, SetSelectedSoftware] = useState([])
  const [RoomName, SetRoomName] = useState([])

  function GetSoftware () {
    window.fetch('http://192.168.1.211:8000/software')
      .then(response => response.json())
      .then(data => SetListOfSoftware(data))
  }

  // Leave "GetSoftware()" in "useState", or you'll get a memory leak.
  useEffect(() => {
    GetSoftware()
  }, [])

  function OnSoftwareClick (index) {
    SelectedSoftware.includes(index) ? SetSelectedSoftware(SelectedSoftware.filter((s) => { return s !== index })) : SetSelectedSoftware([...SelectedSoftware, index])
  }

  function AddRoom (e) {
    e.preventDefault()
    window.fetch('http://192.168.1.211:8000/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: RoomName,
        software: SelectedSoftware.map((value) => ListOfSoftware[value])
      })
    })
    ReloadRooms()
  }

  return (
    <form className='add-rooms' onSubmit={(e) => AddRoom(e)}>
      <h2>Add room</h2>
      <div className='add-rooms__inner-wrapper'>
        <label>
          Name
          <input type='text' onChange={(e) => SetRoomName(e.target.value)} />
        </label>
        <label>
          Select Software
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Version</th>
              </tr>
              {
                ListOfSoftware.length === 0 ? null : ListOfSoftware.map((software, index) =>
                (
                  <tr
                    key={index}
                    style={SelectedSoftware.includes(index) ? STYLE['add-rooms__software--added'] : null}
                    onClick={() => OnSoftwareClick(index)}
                  >
                    <td>{software.name}</td>
                    <td>{software.version}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </label>
      </div>
      <input type='submit' />
    </form>
  )
}
